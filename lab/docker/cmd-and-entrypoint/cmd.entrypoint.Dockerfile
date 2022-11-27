# docker build -t demo:cmd-entry -f cmd.entrypoint.Dockerfile  .
# docker run --rm demo:cmd-entry
# docker run --rm demo:cmd-entry Overriding arg passed in cmd

FROM debian:stable-slim

RUN apt-get update && \
  apt-get install -y --no-install-recommends \
  cowsay \
  screenfetch && \
  rm -rf /var/lib/apt/lists/*

ENV PATH "$PATH:/usr/games"

ENTRYPOINT ["cowsay", "Yo, Entrypoint!!"]