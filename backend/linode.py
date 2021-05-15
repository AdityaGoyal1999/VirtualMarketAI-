
import os
from dotenv import load_dotenv
from paramiko.client import SSHClient

load_dotenv()
USERNAME = os.getenv(key='USERNAME')
PASSWORD = os.getenv(key='PASSWORD')
IP = os.getenv(key='IP')

client = SSHClient()
client.load_system_host_keys()
client.connect(hostname=IP, username=USERNAME, password=PASSWORD)
fish_shell = client.invoke_shell(term='fish')
print(fish_shell)
print(client.exec_command(command='ls -1Fa'))
