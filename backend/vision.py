
import os
from google.cloud import vision
from google.oauth2 import service_account
from dotenv import load_dotenv

load_dotenv()
KEYDIR_PATH = os.getenv('KEYDIR_PATH')
credentials = service_account.Credentials.from_service_account_file(KEYDIR_PATH)
client = vision.ImageAnnotatorClient(credentials=credentials)

image_path = './data/fruits.png'
with open(file=image_path, mode='rb') as image_file:
    content = image_file.read()
    image = vision.Image(content=content)

    objects = client.object_localization(image=image).localized_object_annotations

    print('Number of objects found: {}'.format(len(objects)))
    for object_ in objects:
        print(f'\n{object_.name} (confidence: {object_.score})')
        print('Normalized bounding polygon vertices: ')
        for vertex in object_.bounding_poly.normalized_vertices:
            print(f' - ({vertex.x}, {vertex.y})')
