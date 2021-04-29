// Promise Chaining
// url: https://swapi.dev/api/people/1

axios.get('https://swapi.dev/api/people/1')
.then(res => {
    const homeworlUrl = res.data.homeworld
    console.log(homeworlUrl)
    return axios.get(homeworlUrl)
})
.then(response => axios.get(response.data.films[0]))
.then(res => console.log(res.data))
.catch(err => console.log(err))