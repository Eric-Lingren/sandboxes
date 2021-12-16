// https://rickandmortyapi.com/api/character?page=1


const getCharacters = (finalUrlPath) => {
    return new Promise( (resolve, reject) => {
        axios.get(finalUrlPath)
        .then(res => resolve(res.data.results))
        .catch(err => reject(err))
    })
}

const resolvePromises = (proimisesArray) => {
    Promise.all(proimisesArray)
    .then(data => {
        let cleanedData = data.flat()
        buildPage(cleanedData)
    })
    .catch(err => console.log(err))

}


const initApp = () => {
    let urlPath = 'https://rickandmortyapi.com/api/character?page='
    let finalUrlPath = ''
    let pendingPromises = []

    for(let i = 1; i < 43; i++ ){
        finalUrlPath = urlPath + i 
        pendingPromises.push( getCharacters(finalUrlPath) )
    }

    resolvePromises(pendingPromises)
}

initApp()



const buildPage = (data) => {
    let container = document.getElementById('character-container')
    container.innerHTML = ''

    data.forEach(character => {

        let characterContainerFlipCard = document.createElement('div')
        characterContainerFlipCard.classList.add('flip-card')

        let characterContainerInner = document.createElement('div')
        characterContainerInner.classList.add('flip-card-inner')

        let characterCardFront = document.createElement('div')
        characterCardFront.classList.add('flip-card-front')

        let characterImage = document.createElement('img')
        characterImage.src = character.image
        characterCardFront.appendChild(characterImage)

        let characterCardBack = document.createElement('div')
        characterCardBack.classList.add('flip-card-back')

        let characterName = document.createElement('h2')
        characterName.textContent = character.name
        characterCardBack.appendChild(characterName)

        characterContainerInner.appendChild(characterCardFront)
        characterContainerInner.appendChild(characterCardBack)

        characterContainerFlipCard.appendChild(characterContainerInner)
        container.append(characterContainerFlipCard)
    });

}


const searchCharacters = (e) => {
    e.preventDefault()
    let usersSearch = document.getElementById('searchInput').value
    let usersRequestedUrl = `https://rickandmortyapi.com/api/character?name=${usersSearch}&page=1`
    let pendingPromise = getCharacters(usersRequestedUrl)
    resolvePromises([pendingPromise])
}


let form = document.getElementById('searchForm')
form.addEventListener('submit', searchCharacters)