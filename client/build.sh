docker build -t client .
docker tag client gcr.io/halogen-acumen-344711/client
docker push gcr.io/halogen-acumen-344711/client
