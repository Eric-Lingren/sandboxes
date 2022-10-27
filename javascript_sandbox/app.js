// Given a string: 'aaabbbcc' return  'a3b3c2'
// or 'aaaabbccc'  =>  'a4b3c3'    you know what I mean
// // a4b2c3 for the above..

// function stringCount(str){
//     let splitStr = str.split('')
//     let aCount = 0
//     let bCount = 0
//     let cCount = 0
//     for(let i=0; i<splitStr.length; i++){
//         if(splitStr[i] === 'a'){
//             aCount += 1
//         } else if(splitStr[i] === 'b'){
//             bCount += 1
//         } else {
//             cCount += 1
//         }
//     }
//     let result = `a${aCount}b${bCount}c${cCount}`
//     //console.log(result);
// }

// stringCount('aaabbbcc')





// Given an array of unique integers, determine the minimum absolute difference between any two elements. Print all element pairs with the minimal absolute difference in ascending order...For example, numbers= [6,2,4,10]. The minimal absolute difference is 2. Pairs with that difference are (2,4) and (4.6). Complete the function and the function must print all element pairs sharing the minimal absolute difference in ascending order. Each pair should be printed as two space-separated integers on a single line.
// So these are the instructions
// This is what I have so far...function closestNumbers(numbers) {
//    for (let i=0; i < numbers.length; i++) {
//        for (let j = i+1; j < numbers.length; j++) {
//            if (Math.abs(numbers[i] - numbers[j])) {
//            }
//        }
//    }
// }

//  Sort the array to get items in an ordered format.
//  Loop through the array starting from the second item
//  For each integer, find the difference between that and the previous integer
//  Save that difference in a varible as the current iteration difference.
//  Compare that number to a varible that contains the smallest difference found thusfar.
//  If the current difference is smaller than the current difference, replace the smallest difference with the current difference.
//  If the current difference is the smallest difference found so far, add  those numbers to an array somehow.  We can either save the numbers in an array, or the indexes of those numbers, or as an object. We can convert this data to the specified format for the output once our loop is done.
//  it is import to remove any previously saved numbers if a smaller difference is found.  For this reason it might make the most sense to save those found numbers as an object in an array.  i.e. [ {num1: <number>, num2: <number> difference: <difference> }]
//  Repeat through the whole array.
//  once finshed we can loop through the array of our saved solutions and eliminate any that have a differnce greater than the final number saved in the smallest difference found varible.
//  convert that array of objects into the proper format for outputting the result.









// const runBob = () => {
//     let bob = {
//         company: 'codingCampus',
//         cohortsTaught: 1,
//         studentsHelped: 1,
//     }

//     for(let i = 0; i < 7; i++){
//         bob.cohortsTaught = bob.cohortsTaught += 25
//         bob.studentsHelped = bob.cohortsTaught * 20
//         if(i === 3) bob.company = 'vSchool'
//     }
//     return bob
// }

// console.log(runBob())

// const fullStackDev = (user) => { return user + 'JavaScript, React + Native, MongoDB, SQL, Express, Node, D3, HTML, CSS, Python, Arduino, MQL4, PHP, Salesforce, Linux, AWS, Digital Ocean, NGINX, Cisco CCENT'} 
// console.log(fullStackDev(`Eric Lingren: `))




// const actors = [
//     {firstName: 'Mel', lastName: 'Gibson', living: true, age: 65, born: ['New YORK', 'USA', 1956], _id: 1 },
//     {firstName: 'Marilyn', lastName: 'Monroe', living: false, age: 36, born: ['Los Angeles', 'USA', 1926], _id: 2 },
//     {firstName: 'Arnold', lastName: 'Schwarzenegger', living: true, age: 73, born: ['Thal', 'Austria', 1947], _id:3},
//     {firstName: 'John', lastName: 'Wayne', living: false, age: 72, born: ['Iowa', 'USA', 1907], _id: 4 },
//     {firstName: 'Sophia', lastName: 'Loren', living: true, age: 86, born: ['Rome', 'Italy', 1934], _id: 5}
// ];

// test = () => {
//     req = {
//         query: {
//             living: false
//         }
//     }

//     console.log(req)

//     const living = req.query.living //---- Not Needed But Useful For Other Queries which are not boolean
//     console.log(living)
//     const queryliving = actors.filter(actor => actor.living === living);
//     console.log(queryliving)
// }

// test()


// const parts = [ 
//     { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
//     { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
//     { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
//     { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
//     { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
//     { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
//     { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
//     { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
//     { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
//     { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
//     { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
//     { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
//     { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
//     { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
//     { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
//     { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
//     { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
//     { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
//     { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
//     { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}
// ]


// var total = parts.reduce(function(acc, currentValue){
//     return acc + currentValue.qty
// }, 0);


// console.log(total)



// function getFahren(cityTemp) {
//     // let temp = cityTemp.data.main.temp
//     let temp = cityTemp
//     console.log(temp)
//     console.log( ((9 / 5) * (temp - 273.15) + 32).toFixed(2) )
//     return Math.floor( ((9 / 5) * (temp - 273.15) + 32) )
// }

// console.log(getFahren(250))


// let nowObject = new Date()
// console.log(nowObject)
// console.log(typeof(nowObject))

// console.log(nowObject.toLocaleDateString())
// console.log(typeof(nowObject.toLocaleDateString()))

// let yesterdayInt = nowObject.setDate(nowObject.getDate() - 1)
// console.log(yesterdayInt)
// console.log(typeof(yesterdayInt))

// console.log('Now Less than yesterday?', nowObject < yesterdayInt)

// let yesterdayObject = new Date()
// yesterdayObject.setDate(yesterdayObject.getDate() - 1)
// console.log(yesterdayObject)
// console.log(typeof(yesterdayObject))

// console.log('Is this Less than yesterday?', nowObject < yesterdayObject)

let today = new Date()
let time = today.getHours()
console.log(today)
console.log(typeof(today))
console.log(time)

let hoursToAdd=5;
let currentDate = new Date();
let futureDate = new Date(currentDate.getTime() + hoursToAdd*60*60*1000)
let futureHour = futureDate.getHours()
console.log(futureDate)
console.log(typeof(futureDate))
console.log(futureHour)