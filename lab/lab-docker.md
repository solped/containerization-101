# Lab Docker

## Prerequsite
- [Docker desktop](https://www.docker.com/products/docker-desktop/)
- [NodeJS LTS](https://nodejs.org/en/)

## Steps
- Build server image from `server` folder
```shell 
    cd server
    docker build -t server:1.0.5 .
    docker images
```
- Build client image from `client` folder
```shell
    cd client
    docker build -t client:1.0.5 .
```
- Use Docker compose to start application stack
```shell
    docker-compose up
    docker-compose down
```