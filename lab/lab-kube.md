# Lab Kubernetes

## Prerequsite

- [Docker desktop](https://www.docker.com/products/docker-desktop/)
- Switch Kubernetes context to local custer
  ```shell
      kubectl config get-contexts
      kubectl config use-context docker-desktop
  ```
- Build docker images via docker-compose
  ```shell
  docker-compose --project-name "lab" build
  ```

## Steps

## Useful Commands

```shell
# get resources
kubectl get all -o wide

# Execute into pod
kubectl exec -it pod/client-deployment-687cf56d5f-lh87v -- ash

# Scale Pods
kubectl scale --current-replicas=3 --replicas=5 deployment.apps/client-deployment
```

Useful Link:

- Cheatsheet: https://kubernetes.io/docs/reference/kubectl/cheatsheet/
