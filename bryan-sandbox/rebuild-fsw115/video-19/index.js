
// Promise.all()
// url: https://swapi.dev/api/people/1

async function getAllLukeMovies(){
    const lukeData = await axios.get("https://swapi.dev/api/people/1")
    const lukeFilms = lukeData.data.films
    const pendingFilmsPromises = []

    for( let i = 0; i < lukeFilms.length; i++){
        pendingFilmsPromises.push(axios.get(lukeFilms[i]))
    }
    // console.log(pendingFilmsPromises)

    Promise.all(pendingFilmsPromises)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

getAllLukeMovies()
