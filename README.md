# Docker-k8s-tutorial

### Goals:

- Complete draft of CICD via GitHub action
- Be able to deploy simple web application to EKS
- Test CICD

### Deployment

```shell
aws cloudformation create-stack \
  --region us-east-1b \
  --stack-name my-docker-class-stack \
  --template-url https://amazon-eks.s3.us-west-2.amazonaws.com/cloudformation/2020-10-29/amazon-eks-vpc-private-subnets.yaml
```