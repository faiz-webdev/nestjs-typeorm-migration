## packages
  npm i @nestjs/typeorm typeorm mysql2
  npm i @nestjs/config
  nest g module database
  npm i dotenv

## create migration
  npm run typeorm:create-migration --name=PublicItems
  npm run migration:create --name=itemtest
## Run migrations
  npm run typeorm:run-migrations
  npm run migration:run

## Revert migration
  npm run typeorm:revert-migrations

## Run docker
  docker-compose up