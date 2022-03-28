# Lab Kubernetes

## Prerequsite
- [Docker desktop](https://www.docker.com/products/docker-desktop/)
- Switch Kubernetes context to local custer
```shell
    kubectl config get-contexts
    kubectl config use-context docker-desktop
```

## Steps
- Deploy kubernetes objects to cluster
```shell
    kubectl apply -f k8s
```
- Deleeting resources
```shell
    kubectl delete -f k8s
```
- Show kuberbetes object
```shell
    kubectl get all
```

Useful Link:
- Cheatsheet: https://kubernetes.io/docs/reference/kubectl/cheatsheet/
