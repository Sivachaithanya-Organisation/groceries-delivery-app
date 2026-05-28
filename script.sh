#!/bin/bash
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 794934876309.dkr.ecr.us-west-2.amazonaws.com
docker pull 794934876309.dkr.ecr.us-west-2.amazonaws.com/tanusha-ansible-project:latest
docker rm -f tanusha-ansible-app
docker run -itd -p 3000:3000 --name tanusha-ansible-app 794934876309.dkr.ecr.us-west-2.amazonaws.com/tanusha-ansible-project:latest