// XMLHttpRequest

// xhr.onreadystatechange 
// xhr.readyState
// xhr.status
// xhr.open
// xhr.send
// xhr.responseText

const xhr = new XMLHttpRequest()
        // Method   // URL                      // Async?
xhr.open("GET", "https://swapi.dev/api/people", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        showData(data.results)
    } else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}

function showData(data){
    for(let i = 0; i < data.length; i++){
        const character = document.createElement('h1')
        character.textContent = data[i].name
        document.body.appendChild(character)
    }
}

c@ve5tecH
cave5tecH