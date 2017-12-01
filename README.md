# Koa API Boilerplate (MC)

## Requirements
- Node 8.5.0
- Yarn 1.0.1
- Postgres

## Install

Setup your database
```sh
$ sudo su postgres
$ createdb databaseName
$ exit
```

Clone this repo
```sh
$ git clone git@github.com:gsulloa/koa-boilerplate.git project
$ cd project
```

Setup your env vars
```sh
$ export DB_PASSWORD=securepassword
```
Alternatively with direnv
```sh
$ cp .envrc.example .envrc
$ nano .envrc
# modify the env var with your data
```

Start your server and code!
```sh
$ yarn dev
```

## ToDo:

- Make Tests with jest
- Config CircleCI
