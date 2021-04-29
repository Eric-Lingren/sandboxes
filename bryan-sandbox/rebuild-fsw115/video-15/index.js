// Get requests with axios
// url: http://api.bryanuniversity.edu/eric/list

// Get All


axios.get('https://cors-anywhere.herokuapp.com/http://api.bryanuniversity.edu/eric/list')
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].name
        document.body.appendChild(h1)
    }

})
.catch(error => console.log(error))

// CORS-anywhere
// https://cors-anywhere.herokuapp.com/

// Get One

// axios.get('https://cors-anywhere.herokuapp.com/http://api.bryanuniversity.edu/eric/list/37445bff-0cc9-435d-969e-2e53de58039a')
// .then(response => console.log(response.data))
// .catch(error => console.log(error))