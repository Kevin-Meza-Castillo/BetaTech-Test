FROM postgres:14
MAINTAINER Kevin Meza <kevinmezamc@gmail.com>

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=UTC

RUN mkdir -p /var/lib/postgresql_data1/data/pgdata
COPY ./postgres.conf /var/lib/postgresql_data1/data/pgdata