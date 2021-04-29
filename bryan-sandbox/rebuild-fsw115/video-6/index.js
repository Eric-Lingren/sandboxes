// XMLHttpRequest

// how do we create a request (xhr)
// what parts of this object are important for our request

// xhr.onreadystatechange 
// xhr.readyState
// xhr.status

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){

    }
}

// xhr.readyState
    // 1 - request was sent
    // 2
    // 3
    // 4

// xhr.status
    // 200
    // 404 - not found
    // 201
    // 500