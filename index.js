let museumsUl = document.getElementById("museum")
let museumDiv = document.getElementById("museum-detail")

///// search
let searchInput = document.createElement("input")
searchInput.type = "text"
searchInput.placeholder = "Search for Museum"
document.body.prepend(searchInput)

searchInput.addEventListener("input", (evt) => {
   
  let thingTyped = evt.target.value
      

  let allMuseums = document.querySelectorAll("li.museum-name")
     
  allMuseums.forEach((museumLi) => {
    console.log(museumLi.innerText.toLowerCase())
    if (museumLi.innerText.toLowerCase().includes(thingTyped.toLowerCase())) {
      museumLi.style.display = ""
    } else {
      museumLi.style.display = "none"
    }
  })

})

/////// search

////user login
// let userForm = document.createElement("form")
//     userForm.id = "user-signin"

// let nameLabel = document.createElement("label")
//     nameLabel.innerText = "Name"
//     nameLabel.for = "name"
// let nameInput = document.createElement("input")
//     nameInput.type = "text"
//     nameInput.name = "name"
//     nameLabel.append(nameInput)
//     userForm.append(nameLabel)
    

// let mailLabel = document.createElement("label")
//     mailLabel.innerText = "Email"
//     mailLabel.for = "email"
// let mailInput = document.createElement("input")
//     mailInput.type = "text"
//     mailInput.name = "email"
//     mailLabel.append(mailInput)
//     userForm.append(mailLabel)

// let submitInput = document.createElement("input")
//     submitInput.type = "submit"
//     userForm.append(submitInput)
//     document.body.prepend(userForm)

//     submitInput.addEventListener("click", (evt) => {
//         evt.preventDefault()
//         userForm.remove()
//         let welcomeSign = document.createElement("h4")
//             welcomeSign.innerText = `Welcome ${nameInput.value}`
//             document.body.prepend(welcomeSign)
//         let newName = nameInput.value
//         let newMail = mailInput.value
//         fetch("http://localhost:3000/users", {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json",
//                 "accept": "application/json"
//             },
//             body: JSON.stringify({
//                 name: newName,
//                 email: newMail
//             })
//         })
        
        
//     })
    
    
    
////user login



////// 'GET'
fetch("http://localhost:3000/museums")
.then(r => r.json())
.then(museumArr => {
    museumArr.forEach(museum => {
       turnJsonToHTML(museum)
    });
})

function turnJsonToHTML(museum) {
    
    let museumLi = document.createElement("li")
    museumLi.className = "museum-name"
    museumLi.innerText = museum.name 
    museumsUl.append(museumLi)

    museumLi.addEventListener("mouseenter", (evt) => {
       
        let infoDiv = document.createElement("div")
            infoDiv.className = "museum-info"
            infoDiv.innerText = "Description"
            museumLi.append(infoDiv)

            infoDiv.addEventListener("click", (evt) => {
                
                    museumDiv.innerHTML = ""
                let museumCard = document.createElement("div")
                    museumCard.className = "museum-card"
                let museumH3 = document.createElement("h3")
                    museumH3.innerText = museum.name
                    museumCard.append(museumH3)
                let museumImg = document.createElement("img")
                    museumImg.src = museum.image_url
                    museumImg.alt = museum.name
                    museumImg.width = "400"
                    museumImg.height = "400"
                    museumImg.className = "center"
                    museumCard.append(museumImg)
                let museumDesP = document.createElement("p") 
                    museumDesP.innerText = museum.description  
                    museumCard.append(museumDesP)
                let museumWebpage = document.createElement("p")
                    museumWebpage.innerText =`Official Webpage: ${museum.homepage}`
                    museumCard.append(museumWebpage)
                    museumDiv.append(museumCard)
                    
                    
                    
            })
        
        
        
        let reviewDiv = document.createElement("div")
            reviewDiv.className = "museum-review"
            reviewDiv.innerText = "Reviews"
            museumLi.append(reviewDiv)

            reviewDiv.addEventListener("click", (evt) => {
                museumDiv.innerHTML = ""
                if (museum.reviews.length > 0) {
                    museum.reviews.forEach((review) => {
                        let reviewLi = document.createElement("li")
                            reviewLi.className = "museum-review"
                            reviewLi.innerText = review.content
                            museumDiv.append(reviewLi)
                    })
                } else {
                   museumDiv.innerText = "No review yet!"
                }

                
                let likesLi = document.createElement("li")
                    likesLi.className = "museum-likes"
                    likesLi.innerText = `Likes: ${museum.likes.length}`
                    museumDiv.append(likesLi)
                let dislikesLi = document.createElement("li")
                    dislikesLi.className = "museum-dislikes"
                    dislikesLi.innerText = `Dislikes: ${museum.dislikes.length}`
                    museumDiv.append(dislikesLi)
                
                let likeBtn = document.createElement("button")
                    likeBtn.id = "like-button"
                    likeBtn.innerText = "Like"
                    likesLi.append(likeBtn)

                    likeBtn.addEventListener("click", (evt) => {
                        museum.likes.length ++
                        likesLi.innerText =`Likes: ${museum.likes.length}`
                        likesLi.append(likeBtn)
                    })

                let dislikeBtn = document.createElement("button")
                    dislikeBtn.id = "dislike-button"
                    dislikeBtn.innerText = `Dislikes`
                    dislikesLi.append(dislikeBtn)

                    dislikeBtn.addEventListener("click", (evt) => {
                        museum.dislikes.length ++
                        dislikesLi.innerText =`Dislikes: ${museum.dislikes.length}`
                        dislikesLi.append(dislikeBtn)
                    })
                
                let newReview = document.createElement("form")
                    newReview.id = "review-form"
                    newReview.innerText = "New review:"
                    reviewTextarea = document.createElement("textarea")
                    reviewTextarea.id = "review-content"
                    reviewTextarea.type = "text"
                    submitInput = document.createElement("input")
                    submitInput.id = "review-submit"
                    submitInput.innerText = "Submit"
                    submitInput.type = "submit"
                    newReview.append(reviewTextarea)
                    newReview.append(submitInput)
                    museumDiv.append(newReview)

                    newReview.addEventListener("submit", (evt) => {
                        evt.preventDefault()
                        console.log(reviewTextarea.value)
                        let newContent = reviewTextarea.value
                        
                    })
                
            })

        let planDiv = document.createElement("div")
            planDiv.className = "museum-plan"
            planDiv.innerText = "Plan Your Visit"
            museumLi.append(planDiv)

            planDiv.addEventListener("click", (evt) => {
                museumDiv.innerHTML = ""
            let planCard = document.createElement("div")
                planCard.className = "plan-card"
            let hoursH4 = document.createElement("h4")
                hoursH4.innerText = museum.hours
                planCard.append(hoursH4)
            let addressH4 = document.createElement("h4")
                addressH4.innerText = museum.address
                planCard.append(addressH4)
                museumDiv.append(planCard)
                
            })
        
    })

    museumLi.addEventListener("mouseleave", () => {
        museumLi.lastChild.remove()
        museumLi.lastChild.remove()
        museumLi.lastChild.remove()


    })

    
}