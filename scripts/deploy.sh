#! /usr/bin/env sh

# Exit in case of error
set -e

DOMAIN=airibarne.co \
TRAEFIK_TAG=traefik-airibarne \
STACK_NAME=airibarne \
TAG=${TAG?Variable not set} \
docker-compose \
-f docker-compose.yml \
config > docker-stack.yml

docker stack deploy -c docker-stack.yml --with-registry-auth airibarne
