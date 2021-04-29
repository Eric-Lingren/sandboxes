const getItems = () => {
    axios.get('http://api.bryanuniversity.edu/ericl/list')
    .then(res => {
        displayItems(res.data)
    })
    .catch(err => console.error(err))
}
getItems()


const displayItems = (items) => {
    console.log(items)
    let container = document.getElementById('itemContainer')
    items.forEach(item => {

        let card = document.createElement('div')
        let nameElement = document.createElement('h3')
        nameElement.textContent = item.name
        card.appendChild(nameElement)

        // Delete
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'DELETE'
        deleteButton.value = item._id
        deleteButton.addEventListener('click', deleteItem)
        card.appendChild(deleteButton)

        // Update
        let updateButton = document.createElement('button')
        console.log(item.isComplete)
        let updateText = ''
        if(item.isComplete === false){
            updateText = ' Mark Complete'
        } else {
            updateText = ' Mark Incomplete'
        }
        updateButton.textContent = updateText
        updateButton.id = item._id
        updateButton.value = item.isComplete
        updateButton.addEventListener('click', updateItem)
        card.appendChild(updateButton)

        container.appendChild(card)
    })
}


const addItem = (e) => {
    e.preventDefault()

    let itemName = document.getElementById('itemName').value
    let itemDescription = document.getElementById('itemDescription').value
    let itemPrice = document.getElementById('itemPrice').value
    let itemComplete = document.getElementById('itemComplete').checked

    let data = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        isComplete: itemComplete,
    }

    axios.post('http://api.bryanuniversity.edu/ericl/list', data)
    .then(res => {
        console.log(res.data)
        location.reload()
    })
    .catch(err => console.error(err))
}

let form = document.getElementById('itemForm')
form.addEventListener('submit', addItem)


const deleteItem = (e) => {
    let itemId = e.target.value

    axios.delete(`http://api.bryanuniversity.edu/ericl/list/${itemId}`)
    .then(res => {
        location.reload()
    })
    .catch(err => console.error(err))
}


const updateItem = (e) => {
    e.preventDefault()
    let itemId = e.target.id
    let itemComplete = e.target.value

    let completed = null

    itemComplete === 'false' ? completed = true : completed = false

    let updatedItem = {
        isComplete: completed
    }

    axios.put(`http://api.bryanuniversity.edu/ericl/list/${itemId}`, updatedItem)
    .then(res => {
        location.reload()
    })
    .catch(err => console.error(err))
}