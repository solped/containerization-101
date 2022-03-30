# Pod

## Single container pod

Create a pod using `Kubectl` command

```shell
kubectl run nginx --image nginx
kubectl get pods -o wide
```

Create single container pod via a `configuration file`

```shell
kubectl apply -f lab/kubernetes/pod/single-container-pod.yaml
kubectl get pods -o wide
kubectl delete -f lab/kubernetes/pod/single-container-pod.yaml
```

## Multiple containers pod

Create single multiple pod via a `configuration file`

```shell
kubectl apply -f lab/kubernetes/pod/multiple-container-pod.yaml
kubectl get pods -o wide
kubectl describe -f lab/kubernetes/pod/multiple-container-pod.yaml
kubectl delete -f lab/kubernetes/pod/multiple-container-pod.yaml
```

---

# Service

Create a service to expose pod via `Kubectl` command

```shell
kubectl apply -f lab/kubernetes/service/single-container-pod.yaml
kubectl get all -o wide
kubectl expose pod/nginx --port=80 --target-port=8080
kubectl get all -o wide
# then we could hit `http://localhost:8080`
kubectl delete -f lab/kubernetes/service/single-container-pod.yaml
```

Create a service to expose pod via a `configuration file`

```shell
kubectl apply -f lab/kubernetes/service/single-container-pod.yaml
kubectl get all -o wide
kubectl apply -f lab/kubernetes/service/service-single-container.yaml
kubectl get all -o wide
# then we could hit `http://localhost:8080`
kubectl delete -f lab/kubernetes/service
```

# Deployment

```shell
kubectl apply -f lab/kubernetes/deployment/deployment-nginx.yaml
kubectl describe deployment nginx-deployment
kubectl get all -o wide
```

Let's update image to `1.16.1` and redeploy again

```shell
kubectl apply -f lab/kubernetes/deployment/deployment-nginx.yaml
kubectl get all -o wide
kubectl describe deployment nginx-deployment
```

Let's scale up the application from `2 to 4` and redeploy again

```shell
kubectl apply -f lab/kubernetes/deployment/deployment-nginx.yaml
kubectl get all -o wide
kubectl describe deployment nginx-deployment
```

Clean up the whole resources

```shell
kubectl delete all --all
```

Verify that there is no resource exists

```shell
kubectl get all -o wide
```