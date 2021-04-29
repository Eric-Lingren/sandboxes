// XHR
function getDnD(){
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://www.dnd5eapi.co/api/spells/acid-arrow/', true)
    xhr.send()

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(xhr.response)
            renderSpells(data)
        }
        else if(this.readyState === 4 && this.status === 404) {
            let err = 'I broke'
            console.log(err)
        }
    }
}

function renderSpells(data){
    console.log(data)
}


// AXIOS
const getCatFacts = () => {
    axios.get('https://cat-fact.herokuapp.com/facts')
    .then(res => {
        renderCatFacts(res.data)
    })
    .catch(err => console.log(err))
}


const renderCatFacts = (data) => {
    const catContainer = document.getElementById('catContainer')

    for(let i = 0; i < data.length; i++){
        let catFactElement = document.createElement('li')
        catFactElement.textContent = data[i].text
        catContainer.appendChild(catFactElement)
    }
}


// FETCH
const getPokemon = () => {
    fetch('https://api.vschool.io/pokemon')
    .then(res => {
        return res.json()
    })
    .then(data => {
        renderPokemon(data)
    })
    .catch(err => console.log(err))
}


function renderPokemon(pokemon){
    console.log(pokemon)
}
