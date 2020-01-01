const API = 'http://localhost:3000'

function getMuseums() {
    return fetch(API + '/museums').then(r => r.json())
}

function deleteReview(id) {
   
    return fetch(API + `/reviews/${id}`, {
        method: "DELETE"
    }).then(r => r.json())
    
}

// function editReview(id) {
//     return fetch(API + `/reviews/${id}`, {
//         method: "PATCH",
//         headers: {
//             "content-type": "application/json",
//             "accept": "application/json"
//         },
//         body: JSON.stringify({
//             content: this.content,
//             museum_id: this.museum_id,
//             user_id: this.user_id

//         })
//     })
//     .then(r => r.json())
//     debugger
// }

const Adaptor = {
    allMuseums: getMuseums,
    deleteReview: deleteReview,
    editReview: editReview
}