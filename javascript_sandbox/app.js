// Given a string: 'aaabbbcc' return  'a3b3c2'
// or 'aaaabbccc'  =>  'a4b3c3'    you know what I mean
// a4b2c3 for the above..

function stringCount(str){
    let splitStr = str.split('')
    let aCount = 0
    let bCount = 0
    let cCount = 0
    for(let i=0; i<splitStr.length; i++){
        if(splitStr[i] === 'a'){
            aCount += 1
        } else if(splitStr[i] === 'b'){
            bCount += 1
        } else {
            cCount += 1
        }
    }
    let result = `a${aCount}b${bCount}c${cCount}`
    //console.log(result);
}

stringCount('aaabbbcc')





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










