let myGreeting = document.getElementById('header');
let myNewGreeting = document.createElement("h1")
myNewGreeting.textContent = "JavaScript Made This!!!"
myGreeting.append(myNewGreeting)
myGreeting.style.textAlign = "center"
let mySpan = document.createElement("span")
let myName = mySpan.textContent = "Johnny M"
mySpan.style.color = "peachpuff"
let subGreeting = document.createElement("h4")
subGreeting.textContent = " Wrote the JavaScript"
header.append(subGreeting)
subGreeting.prepend(mySpan)

let messages = document.querySelectorAll(".messages > div")

console.log(messages)

const overwriteOriginalData = () => {
    let newMessageLeft = messages.textContent = "I really have something serious to say"
    let newMessageRight = messages.textContent = "Me too!"
    let newMessageLeftTwo = messages.textContent = "Say it already..."
    let newMessageRightTwo = messages.textContent = "This button thing is driving me crazy"

    for (var i = 0; i < messages.length; i++) {
        messages[0].textContent = newMessageLeft
        messages[1].textContent = newMessageRight,
        messages[2].textContent = newMessageLeftTwo,
        messages[3].textContent = newMessageRightTwo
    }
}
overwriteOriginalData()


let element0;
let element1;
let element2;
let element3;

const getElements = () => {
    for (var i = 0; i < messages.length; i++) {
        element0 = messages[0]
        element1 = messages[1]
        element2 = messages[2]
        element3 = messages[3]
    }
} 
getElements()


let btn = document.getElementById("clear-button");
btn.addEventListener('click', function() {
    console.log(element1)
    element0.textContent = ''
    element1.textContent = ''
    element2.textContent = ''
    element3.textContent = ''
}); 