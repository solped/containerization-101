# Docker-k8s-tutorial

### Goals:

- [x] Complete draft of CICD via GitHub action
- [ ] Setup EKS
  Cluster https://docs.aws.amazon.com/eks/latest/userguide/getting-started-console.html#eks-configure-kubectl
- [ ] Be able to deploy simple web application to EKS

### DB Migration

- https://sequelize.org/master/manual/migrations.html
- `npx sequelize-cli db:migrate`

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

- https://docs.aws.amazon.com/eks/latest/userguide/connecting-cluster.html

Prerequisite:

- https://docs.aws.amazon.com/eks/latest/userguide/connector_IAM_role.html
- https://docs.aws.amazon.com/eks/latest/userguide/troubleshooting_iam.html#security-iam-troubleshoot-cannot-view-nodes-or-workloads
- eks:AccessKubernetesApi - adding IAM users or roles to the aws-auth configmap - brew install aws-iam-authenticator
- brew install aws-iam-authenticator
- curl -o kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.21.2/2021-07-05/bin/darwin/amd64/kubectl
- https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/

## Step by step:

- get auth token
  ```shell
  aws eks get-token --cluster-name eks-lab
  ```

```
aws sts get-caller-identity
aws eks update-kubeconfig --region us-east1 --name docker-k8s-cluster

kubectl get svc
```

### Set up K8S cluster

```shell
# Create secret object for image pulling on private registry
# service-account: /Users/worasit.daimongkol/Downloads/halogen-acumen-344711-f697a3f90db5.json
kubectl create secret docker-registry gcr-json-key \
--docker-server=gcr.io \
--docker-username=_json_key \
--docker-password="$(cat ~/Downloads/halogen-acumen-344711-f697a3f90db5.json)" \
--docker-email=worasit.dmk501@gmail.com
```
