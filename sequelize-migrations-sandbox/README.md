

Setting up table and migration example:

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
OR
npx sequelize-cli model:generate --name Task --attributes name:string,description:string,isComplete:boolean,someNumber:integer

Configuration migration:
npx sequelize-cli db:migrate

Undo last migration:
npx sequelize-cli db:migrate:undo



Creating a new seed:
npx sequelize-cli seed:generate --name demo-user


Add seeds to DB:
npx sequelize-cli db:seed:all


Undoing seeds:

If you wish to undo the most recent seed:
npx sequelize-cli db:seed:undo

If you wish to undo a specific seed:
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

If you wish to undo all seeds:
npx sequelize-cli db:seed:undo:all



Generate new Migration skeleton:
npx sequelize-cli migration:generate --name migration-skeleton