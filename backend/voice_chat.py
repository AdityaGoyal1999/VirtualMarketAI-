
import os
from google.cloud import speech
from google.oauth2 import service_account
from dotenv import load_dotenv

load_dotenv()
KEYDIR_PATH = os.getenv('KEYDIR_PATH')
credentials = service_account.Credentials.from_service_account_file(KEYDIR_PATH)
client = speech.SpeechClient(credentials=credentials)

# The name of the audio file to transcribe
gcs_uri = "gs://cloud-samples-data/speech/brooklyn_bridge.raw"

audio = speech.RecognitionAudio(uri=gcs_uri)

config = speech.RecognitionConfig(
    encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
    sample_rate_hertz=16000,
    language_code="en-US",
)

# Detects speech in the audio file
response = client.recognize(config=config, audio=audio)

for result in response.results:
    print("Transcript: {}".format(result.alternatives[0].transcript))