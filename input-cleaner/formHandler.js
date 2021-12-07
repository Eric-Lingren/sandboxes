
const dataCleaner = (dirtyData) => {
    return dirtyData.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
}

const handleChange = (e) => {
    let cleanedData = dataCleaner(e.target.value)
    e.target.value = cleanedData
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('do something with form')
}

document.getElementById('first-name-input').addEventListener('change', handleChange)
document.getElementById('last-name-input').addEventListener('change', handleChange)
document.getElementById('input-form').addEventListener('submit', handleSubmit)