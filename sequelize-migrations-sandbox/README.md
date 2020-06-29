# Sequelize Migrations Sandbox
## This is a boilerplate repo to bootstrap a full backend with Sequelize Migrations

### Repo Includes:
* Server
* Router
* Models + Relations
* Migrations
* Seeds

### About Server:
This server is optimized for production environments because it utilizes Sequelize authorization with migrations rather than syncs.  It contains all the middleware needed for routing and error handling. It also includes morgan in dev environments.

### About Router:
This includes a boilerplate router for the Users with all the crud methods.  It also includes a table join between Users and Tasks to ensure relations were appropriately created in the migrations.

### About Models and Relations
This repo has two models - User and Task.  They are both related to each other.  These are created via the Sequelize CLI.  More on this later.

### About Migrations
This repo uses migrations in order to build and update tables/relations correctly upon new instantiation or enhancement in order to prevent the inherent issues that come with sync, as well as to perform version control, data integrity, and rollback capabilities.

### About Seeds
Seeds allow you to post or remove new records to your tables via the CLI, rather than manually creating dummy data.


## How to use Migrations

The remainder of this guide will assume you have cloned this repo as a starting point to ensure the setup and environment is configured properly and will be an abbreviated shortcut version of the Sequelize docs found here: (https://sequelize.org/master/manual/migrations.html)

### Installation:

First make sure you have sequelize cli installed:
``npm install --save-dev sequelize-cli``   

### Creating New Tables:
Next, to set up a new database table from scratch, we need to generate a new model.  You can specify all attributes you want to be included for the table in the cli.  Here are two examples which we used in the creation of this repo:
``npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string``   
OR
``npx sequelize-cli model:generate --name Task --attributes name:string,description:string,isComplete:boolean,userId:integer``    

Now you will have a new schema created in the models file.  Double-check it to make sure you have all the data and fields you require.  You can always edit this file rather than deleting it and rebuilding it with the cli.




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