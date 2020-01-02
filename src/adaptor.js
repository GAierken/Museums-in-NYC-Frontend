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

function createReview(content, user_id, museum_id){
    return fetch(API + `/reviews`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            
            content: content,
            user_id: user_id,
            museum_id: museum_id

        }) 
    })
    .then(r => r.json())
}

function createUser(name) {
       
    

    return fetch(API + '/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': "application/json"
        },
        body: JSON.stringify({
            name: name,
            
        })
    })

    .then(r => r.json())
   
}
const Adaptor = {
    allMuseums: getMuseums,
    deleteReview: deleteReview,
    editReview: editReview,
    createReview: createReview,
    createUser: createUser
}