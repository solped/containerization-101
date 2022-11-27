# docker build -t demo:cmd -f cmd.Dockerfile .
# docker run --rm demo:cmd
# docker run --rm demo:cmd screenfetch -E
# as default

FROM debian:stable-slim

RUN apt-get update && \
  apt-get install -y --no-install-recommends \
  cowsay \
  screenfetch && \
  rm -rf /var/lib/apt/lists/*

ENV PATH "$PATH:/usr/games"
CMD ["cowsay", "Yo, CMD !!"]