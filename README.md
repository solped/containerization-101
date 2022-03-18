# Docker-k8s-tutorial

### Goals:

- [x] Complete draft of CICD via GitHub action
- [ ] Setup EKS Cluster https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html#eks-configure-kubectl
- [ ] Be able to deploy simple web application to EKS


### Deployment

```shell
aws cloudformation create-stack \
  --region us-east-1b \
  --stack-name my-docker-class-stack \
  --template-url https://amazon-eks.s3.us-west-2.amazonaws.com/cloudformation/2020-10-29/amazon-eks-vpc-private-subnets.yaml
  
  
```
### Configuration
Get credentials for config data 

```
cat $HOME/.kube/config | base64
```

#### Steps
- Initial networking of k8s via cloudformation template
- Create cluster based on that network (manually or cli)
- validate connection from your local machine with AWS via 

```
aws sts get-caller-identity
aws eks update-kubeconfig --region us-east1 --name docker-k8s-cluster
kubectl get svc
```