docker build -t server .
docker tag server gcr.io/halogen-acumen-344711/server
docker push gcr.io/halogen-acumen-344711/server
