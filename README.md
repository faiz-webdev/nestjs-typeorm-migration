## packages
  npm i @nestjs/typeorm typeorm mysql2
  npm i @nestjs/config
  nest g module database
  npm i dotenv

## create migration
  npm run typeorm:create-migration --name=PublicItems
## Run migrations
  npm run typeorm:run-migrations

## Revert migration
  npm run typeorm:revert-migrations