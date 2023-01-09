# AWS

### Build and Push docker images to ECR

More details: https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html

- Login to AWS CLI
    ```shell
    aws configure
    ```
- Get login password and login to the ECR repository
    ```shell
    aws ecr get-login-password --region ap-southeast-2 | podman login --username AWS --password-stdin 227128452725.dkr.ecr.ap-southeast-2.amazonaws.com/todo-client
    aws ecr get-login-password --region ap-southeast-2 | podman login --username AWS --password-stdin 227128452725.dkr.ecr.ap-southeast-2.amazonaws.com/todo-server
    ```

    - Build docker image and tag image
        ```shell
        # Client
        podman build -t todo-client .
        podman tag todo-client 227128452725.dkr.ecr.ap-southeast-2.amazonaws.com/todo-client:1.0.0
        podman push 227128452725.dkr.ecr.ap-southeast-2.amazonaws.com/todo-client:1.0.0
    
        # Server
        podman build -t todo-server .
        podman tag todo-server 227128452725.dkr.ecr.ap-southeast-2.amazonaws.com/todo-server:1.0.0
        podman push 227128452725.dkr.ecr.ap-southeast-2.amazonaws.com/todo-server:1.0.0
        ```

    - Connect to the EKS cluster
      more detail: https://www.youtube.com/watch?v=cN0GKuMlSFY
      ```shell
      # Get assume role
      aws sts assume-role --role-arn "arn:aws:iam::227128452725:role/eksClusterRole" --role-session-name eks-admin
      aws eks update-kubeconfig --name todo-cluster --region `ap-southeast-2`
      ```

## EKS Cluster Management via eksctl

    ```shell
    eksctl create cluster \
    --name todo-cluster \
    --version 1.24 \
    --region ap-southeast-2 \
    --nodegroup-name todo-nodes \
    --node-type t2.micro \
    --nodes 2

    eksctl delete cluster todo-clusster
    ```

https://www.youtube.com/watch?v=p6xDCz00TxU