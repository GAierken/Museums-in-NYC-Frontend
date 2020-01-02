const API = 'http://localhost:3000'

function getMuseums() {
    return fetch(API + '/museums').then(r => r.json())
}

function deleteReview(id) {
   
    return fetch(API + `/reviews/${id}`, {
        method: "DELETE"
    }).then(r => r.json())
    
}

function editReview({id, content, user_id, museum_id}) {
   
    return fetch(API + `/reviews/${id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            id: id,
            content: content,
            user_id: user_id,
            museum_id: museum_id

        })
    })
    .then(r => r.json())
    
    
}

function createReview(){
    return fetch(API + `/reviews`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            id: this.id,
            content: this.content,
            user_id: this.user_id,
            museum_id: this.museum_id

        }) 
    })
}

const Adaptor = {
    allMuseums: getMuseums,
    deleteReview: deleteReview,
    editReview: editReview,
    createReview: createReview
}