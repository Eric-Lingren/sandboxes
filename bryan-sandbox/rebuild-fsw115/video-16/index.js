// GET's THE LIST ITEM's FROM THE DATABASE
function getData(){
    axios.get("http://api.bryanuniversity.edu/eric/list")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

// innerHTML

// LISTS THE LIST NAMES TO THE DOM
function listData(data){

    // document.getElementById('listContainer').innerHTML = ''
    clearData()

    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = data[i].name
        document.getElementById('listContainer').appendChild(h1)
    }
}

function clearData(){
    const el = document.getElementById('listContainer')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()


// FORM FOR THE POST REQUEST
const todoForm = document["listForm"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newListItem = {
        name: todoForm.name.value
    }
    
    todoForm.name.value = ""
    
    axios.post("http://api.bryanuniversity.edu/eric/list", newListItem)
        .then(res => getData())
        .catch(err => console.log(err))
})

