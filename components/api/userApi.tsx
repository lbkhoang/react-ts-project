//TODO: refactor this with proper api call

// Return a Promise to make code easier to read
export function getUserById(id : string) {
    let url = 'http://127.0.0.1:5000/user/' + id 
    return fetch(url)
        .then(response => response.json())
}

export function getUser() {
    let url = 'http://127.0.0.1:5000/all'
    return fetch(url)
        .then(response => response.json())
}