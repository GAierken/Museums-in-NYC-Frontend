const API = 'http://localhost:3000/'

function getMuseums() {
    return fetch(API + '/museums').then(r => r.json())
}


const Adaptor = {
    allMuseums: getMuseums
}