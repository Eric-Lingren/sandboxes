// var catData = [{
//     "breed": "Abyssinian",
//     "country": "Ethiopia",
//     "origin": "Natural/Standard",
//     "coat": "Short",
//     "pattern": "Ticked"
// }]
var catData = [{
    "breed": "Abyssinian",
    "country": "Ethiopia",
    "origin": "Natural/Standard",
    "coat": "Short",
    "pattern": "Ticked"
}]
// var catParse = JSON.parse(catData);
var catList = document.getElementById("cats")
for (let x = 0; x < catData.length; x++){
    catList.innerHTML += "<li>" + catData[x] + "<li>"
    
}