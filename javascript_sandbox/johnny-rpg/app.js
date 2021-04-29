

/**
Project Requirements:
Console must greet player with a fun message - done
Console must ask for the player's name and store it - done
Walking:
The console will ask the user to enter a "w" to walk - TO DO0
C Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)00
If a wild enemy appears: 
The enemy is random (can be chosen out of a minimum of 3 different enemy names)
The user can decide to attack or run
If attacking, a random amount of damage will be delt between a min and max
If running, there will be a 50% chance of escaping
After the player attacks or runs the enemy attacks back for a random damage amount
If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. Use a while loop to control this flow.
If the enemy kills the player the console prints a cool death message and the game ends
Inventory
When the player kills enemies, they are awarded with items
If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory
Passing Criteria: Demo to the Instructor/TA & Code Review
An instructor or TA will look through your code with you and make sure you have a solid grasp on using functions, loops, and conditionals in JavaScript, as well as to verify that you're following JavaScript code standards and good general programming practices.
This project passes off the following levels of the Skills Tree:
Programming Principles, Level 2 
**/
const readlineSync = require('readline-sync');
const playerName = readlineSync.question("input player one's name ")
const playerActions = readlineSync.question('You know what you gotta do... Dont be a coward and run.')
// const enemyName = getWildEnemy()
let player= {
    name: playerName,
    hp: 10,
}
let enemy = {
    name: null,
    hp: 10
}
function getWildEnemy(){
    const arr = [wildEnemyBill = 'Wild Bill', wildEnemyJesseJames = 'Jessie James', wildEnemyTheKid = 'Billy the Kid']
    const enemyIndex = randomNum(arr.length)
    enemy.name = arr[enemyIndex]
    // return arr[enemyIndex]
}
// function getWildEnemyName(enemyName){
//     console.log(enemyName)
//     const aggressor = enemy.enemyIndex
//     return aggressor
// }
console.log('Hello ' + `${playerName}` + ' welcome to Clossal Adventure type "w" to walk and explore the town ' + 
'It\'s full of mysterious tresure and bandits alike.' + ' you currently have 10 hitpoints. press "w" to enter the killing fields of 1\'s and 0\'s');
walk()
function letSleep(ms){
    async function sleep() {
        await sleep(2000)
    }
}
function walk(){
    const value = randomNum(5)
    if(value >= 4){
        getWildEnemy()
        const playerAction = readlineSync.question('You have just ran into' + `${enemy.name}` + 'nice job, oh... and good luck!')
        encounterEnemy()
        letSleep()
        wildEnemy()
    } else if(value === 3) {
        console.log(`${enemy.name}` + ' is gaining on you quickly, I suggest moving a little faster!')
    } else if (value === 2) {
        console.log('You made it... press "w" to keep walking')    
    } 
    else {
        console.log('Nice try getting away... now your mine.')
        attack()
        console.log()
    }
    // return value
}
function randomNum(max){
    return Math.floor(Math.random() * max)
}
function randomNumberInRange(min, max){
    //max value = 8 Min value = 3
    const adjustedMin = min -1;
    const adjustedMax = max -1;
    return Math.floor(Math.random() * (adjustedMax - adjustedMin) + adjustedMin)
}
function wildEnemy(){
    const arr = [wildEnemyBill = 'Wild Bill', wildEnemyJesseJames = 'Jessie James', wildEnemyTheKid = 'Billy the Kid']
    const enemyIndex = randomNum(arr.length)
    return arr[enemyIndex]
}
function encounterEnemy(){
    const playerAction = readlineSync.question('You can either attack or run... However,' + `${enemy.name}` + 'is known to have a ton of money from' + 
    'robbing banks... He may have some beautiful jewels... If you kill him, they are yours.' + ' Enter A to attack and R to run.')
    if(playerAction === 'A'){
        attack()
    } else {
        run()
    }
}
function attack(){
    const damage = randomNumberInRange(3, 9)
    player.hp - damage
    isDead()
    // return damage
}
function run(){
    randomNum(1, 2)
    if(randomNum < 2){
        console.log(`${enemy.name}` + 'Has caugt you...' + 'Prepare for battle.') 
            attack()
            console.log(`${enemy.name}` + ' took ' `${damage}`)
    }
    else {
        console.log('You got lucky')
    }
}
function isDead(damage, enemyIndex){
    if(player.hp <= 0){
        console.log('Your dead!')    
    }
    else if(enemy.hp <= 0){
        console.log('You did it.. you killed' + `${enemy.name}` + ' that ol\' dirty bastard' + ' Congratulations ' + `${player.playerName}` + 'you won the game.')
    } else {
        console.log('Your still alive ' + `${enemy.name}` + ' took ' `${damage}` + '' + `${player.playerName}` + ' Do you want to run like a coward or kill him???' +
        ' Press "A" to attack' + ' or R to run.')
        if(readlineSync.keyInSelect === 'A')
        encounterEnemy()
    }
}