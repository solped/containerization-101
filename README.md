# Docker-k8s-tutorial

### Goals:

- [x] Complete draft of CICD via GitHub action
- [x] Be able to deploy simple web application to EKS
- [ ] Setup EKS Cluster https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html#eks-configure-kubectl

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
aws eks update-kubeconfig --region us-east1 --name docker-cluster

cat $HOME/.kube/config | base64
```
