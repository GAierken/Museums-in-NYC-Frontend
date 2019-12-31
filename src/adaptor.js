const API = 'http://localhost:3000'

function getMuseums() {
    return fetch(API + '/museums').then(r => r.json())
}

function deleteReview(id) {
   
    return fetch(API + `/reviews/${id}`, {
        method: "DELETE"
    }).then(r => r.json())
    
}

const Adaptor = {
    allMuseums: getMuseums,
    deleteReview: deleteReview
}