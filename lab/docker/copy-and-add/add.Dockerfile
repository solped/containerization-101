# docker build -t demo:add -f .\add.Dockerfile .
# docker run --rm --name my-running-app -p 8080:80 demo:add
# docker exec -it my-running-app bash 
# cd /usr/local/apache2/htdocs/

FROM httpd:2.4
ADD https://www.dropbox.com/scl/fi/n3i2y6t2ee4dalovigu58/dogmeme.jpeg?rlkey=ggv97bixxbouufuhk5m9gimq1&dl=0 /usr/local/apache2/htdocs/
