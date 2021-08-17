<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Fastify rest api TypeORM Typescript</h3>
</p>

### Built With

* [Fastify](https://www.fastify.io/)
* [TypeORM](https://typeorm.io/#/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/iamlookod/fastify-rest-api-typeorm-typescript.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Make ENV file
  ```sh
   cp .env.sample .env
   ```
4. Run development server
  ```sh
   yarn dev
   ```
### DB Migration
1. Generate migration
  ```sh
   yarn typeorm migrate:genereate -[FILE_NAME]
   ```
2. Run migration
  ```sh
   yarn typeorm migrate:run
   ```
3. Revert migration
  ```sh
   yarn typeorm migrate:revert
   ```
### Build
  ```sh
   yarn build
   ```

### Start production
  ```sh
   yarn start
   ```

### Start Docker compose
  ```sh
   docker compose up
   ```

### Start Docker
  ```sh
   docker build -t [IMAGE_NAME] .
   docker run -p [YOUR_PORT]:[CONTAINER_PORT] -env--file=[PATH_TO_ENV] [IMAGE_NAME]
   ```