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