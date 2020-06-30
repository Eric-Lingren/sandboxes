# Sequelize Migrations Sandbox
## This is a boilerplate repo to bootstrap a full backend with Sequelize Migrations

### Repo Includes:
* Server
* Router
* MySQL Database
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

The remainder of this guide will assume you have cloned this repo as a starting point to ensure the setup and environment is configured properly and will be an abbreviated shortcut version of the Sequelize docs found here: https://sequelize.org/master/manual/migrations.html

### Installation:

First make sure you have sequelize cli installed:   
``npm i -g --save-dev sequelize-cli``   

### Creating New Tables:
Next, to set up a new database table from scratch, we need to generate a new model.  You can specify all attributes you want to be included for the table in the cli.  Here are two examples which we used in the creation of this repo:   
``npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string``   
OR   
``npx sequelize-cli model:generate --name Task --attributes name:string,description:string,isComplete:boolean,userId:integer``    

Now you will have a new schema created in the models file.  Double-check it to make sure you have all the data and fields you require.  You can always edit this file rather than deleting it and rebuilding it with the cli.

### Migrations Part 1 - Building Skeletons:
Anytime we need our database updated with the changes in the code, we need to stage any changes that happened before we update.  These stages are called skeletons.  You do not need a new skeleton for each minor change if you are tweaking or changing things.   

Skeletons are created with the following script:    
``npx sequelize-cli migration:generate --name migration-skeleton``   

An example of how to use this is:   
``npx sequelize-cli migration:generate --tasks-users-relations migration-skeleton``   

### Migrations Part 2 - Utilizing Skeletons:
Now we have a skelton created.  This will be for the changes we need in the database.  Each skeleton will have an Up and Down attribute.  Up will be everything that we update to the database.  Down will be to undo our changes.  These should match.  In the skeleton we can create new tables, new columns or new relations.  Make your edits now.  ***Before you move on to Part 3, dont forget to change any existing models to ensure they reflect any new columns you added to your skeleton!***

### Migrations Part 3 - Updating Navicat/SQL via Skeleton:
Anytime we need our database updated with the changes in the code, we use the skeleton we created to perform that action with the migration. 

In order to push our skeleton migration update we run:   
``npx sequelize-cli db:migrate``   

In order to revert our skeleton migration we run:   
``npx sequelize-cli db:migrate:undo``

### Seeds - Building Test Data
We can use seeds to bootstrap and create dummy data very quickly.  A seed is a boilerplate row we can use to inject into our database to validate functionality.

To creating a new seed:   
``npx sequelize-cli seed:generate --name demo-user``   
You can customize the data in the seed file that was created.

Once your data is how you want, you can insert it into the database by using:   
``npx sequelize-cli db:seed:all``   

To remove your seeds from the database:   
``npx sequelize-cli db:seed:undo``  

If you wish to undo a specific seed:   
``npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data``   

If you wish to undo all seeds:   
``npx sequelize-cli db:seed:undo:all``   


## Custom NPM Scripts
This repo's package json has a few custom scripts included to make these some of these commands a little easier.  

Here's your shortcuts:

Push Seeds to DB:   
``npm run-script db-seed``   

Revert DB Seeds:   
``npm run-script db-seed-undo``   

Perfrom New Migration:   
``npm run-script db-migrate``   

Revert Migration:   
``npm run-script db-migrate-undo``

