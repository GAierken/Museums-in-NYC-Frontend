let museumList = document.getElementById("museums-list")
let museumDetail = document.getElementById("museum-detail")

class museumJS {
    static all = []
    constructor(museumObj) {
        ///this attributes
        this.id = museumObj.id 
        this.name = museumObj.name
        this.address = museumObj.address
        this.description = museumObj.description
        this.image_url = museumObj.image_url
        this.hours = museumObj.hours
        this.homepage = museumObj.homepage
        this.reviews = museumObj.reviews
        this.likes = museumObj.likes
        this.dislikes = museumObj.dislikes

        ///structure
        this.nameLiTag = document.createElement("li")
         this.nameLiTag.className = "list-group-item"
         this.nameLiTag.innerText = this.name
        museumList.append(this.nameLiTag)

        this.descriptionTag = document.createElement("div")
         this.descriptionTag.className = "museum-description"
         this.descriptionTag.innerText = "Description"

        this.reviewsTag = document.createElement("div")
         this.reviewsTag.className = "museum-review"
         this.reviewsTag.innerText = "Review"
        
        this.planVisitTag = document.createElement("div")
         this.planVisitTag.className = "museum-plan"
         this.planVisitTag.innerText = "Plan Your Visit"
        
        this.nameLiTag.addEventListener('mouseenter', this.handleMouseEnter)
        this.nameLiTag.addEventListener('mouseleave', this.handleMouseLeave)

        
         
        this.descriptionTag.addEventListener("click", this.desClickHandel)
        this.reviewsTag.addEventListener("click", this.revClickHandel)
        this.planVisitTag.addEventListener("click", this.planClickHandel)

        
        ///
        museumJS.all.push(this)

    }
    /////end constructor
    handleMouseEnter = () => {
        
        this.nameLiTag.append(this.descriptionTag)
        this.nameLiTag.append(this.reviewsTag)
        this.nameLiTag.append(this.planVisitTag)
    }
    handleMouseLeave = () => {
       while (this.nameLiTag.children) {
           this.nameLiTag.children[0].remove()
       }   
    }

    desClickHandel = () => {
        museumDetail.innerHTML = " "
        this.detailTag = document.createElement("div")
         this.detailTag.className = "detail"
        this.nameH4 = document.createElement("h4")
        this.nameH4.innerText = `${this.name}`
        this.detailTag.append(this.nameH4)
        this.imgTag = document.createElement("img")
        this.imgTag.src = `${this.image_url}`
        this.imgTag.alt = `${this.name}`
        this.imgTag.width = '460'
        this.imgTag.height = '400'
        this.detailTag.append(this.imgTag)
        this.desPTag = document.createElement("p")
        this.desPTag.className = 'museum-des'
        this.desPTag.innerText = `${this.description}`
        this.detailTag.append(this.desPTag)
        this.homepageTag = document.createElement('a')
        this.homepageTag.className = 'museum-homepage'
        this.homepageTag.innerText = "Official Webpage"
        this.homepageTag.href = `${this.homepage}`
        this.detailTag.append(this.homepageTag)
        museumDetail.append(this.detailTag)

    }
    revClickHandel = () => {
        museumDetail.innerHTML = " "
        this.nameH4 = document.createElement("h4")
         this.nameH4.innerText = `${this.name}`
        
         
         
        museumDetail.append(this.nameH4)
        
        if (this.reviews.length > 0) {
            this.reviews.forEach(review => {
                new ReviewJS(review)
               
            });
        } else {
            this.noRevLi = document.createElement("li")
            this.noRevLi.className = "no-review"
            this.noRevLi.innerText = "No review yet!"
            museumDetail.append(this.noRevLi)

            
            
      
        }
            this.signInForm = document.createElement('form')
            this.signInForm.className = 'create-user'
            this.signInForm.id = 'name'
            this.signInForm.innerText = 'Please sign-in to give us feedback!'
            
            

            this.signInInput = document.createElement('input')
            this.signInInput.type = 'text'
            this.signInInput.name = 'name'
            
            
            this.signInForm.append(this.signInInput)
            
            this.userSubmit = document.createElement('input')
            this.userSubmit.className = 'user-submit'
            this.userSubmit.type = 'submit'
            this.userSubmit.innerText = 'Sign Up'
            this.signInForm.append(this.userSubmit)
            
            museumDetail.append(this.signInForm)

           this.signInForm.addEventListener('submit', (evt) => {
               evt.preventDefault()
               let name = evt.target['name'].value
               Adaptor.createUser(name)
              .then(user => {
                  
                this.signInForm.remove()
                this.likesBtn = document.createElement("button")
                 this.likesBtn.className = 'likes-button'
                 this.likesBtn.innerText = `👍${this.likes.length}`
                 this.nameH4.append(this.likesBtn)

         
                this.dislikesBtn = document.createElement("button")
                 this.dislikesBtn.className = 'dislikes-button'
                 this.dislikesBtn.innerText = `👎${this.dislikes.length}`
                 this.nameH4.append(this.dislikesBtn)
                this.likesBtn.addEventListener("click", (evt) => {
                    this.likes.length ++
                    evt.target.innerText = `👍${this.likes.length}`
                    Adaptor.createLikes(user.id, this.id)
                    .then(newLike => {
                        this.likes.push(newLike)
                        user.likes.push(newLike)
                    })
                 })
                 this.dislikesBtn.addEventListener("click", (evt) => {
                    this.dislikes.length ++
                    evt.target.innerText = `👎${this.dislikes.length}`
                    Adaptor.createDislikes(user.id, this.id)
                    .then(newDislike => {
                        
                        this.dislikes.push(newDislike)
                        user.dislikes.push(newDislike)
                    })
                    
                 })
                 
                  this.createRevForm = document.createElement('form')
                  this.createRevForm.className = "create-review"
                  this.createRevForm.innerText = `Hi! ${user.name}! Please give us your feedback:`
                 this.createRevText = document.createElement('textarea')
                  this.createRevText.name = 'review'
                  this.createRevText.innerText = 'Your review here...'
                 this.createRevInput = document.createElement('input')
                 this.createRevInput.className = 'create-rev-submit'
                  this.createRevInput.type = 'submit'
                  this.createRevForm.append(this.createRevText, this.createRevInput)
                 museumDetail.append(this.createRevForm)
                 
                
                 
                 this.createRevForm.addEventListener('submit', (evt) => {
                     evt.preventDefault()
                     let newContent = evt.target.querySelector('textarea').value
                        // alert('Your new review is saved!')
                       
                     Adaptor.createReview(newContent, user.id, this.id)
                     .then(newRev => {
                        
                         this.createRevForm.remove()
                         new ReviewJS(newRev)
                         if(this.noRevLi){
                             this.noRevLi.remove()
                             this.createRevForm.querySelector('textarea').value = " "
                             
                             museumDetail.append(this.createRevForm)
                            

                         }else{
                            
                            this.createRevForm.querySelector('textarea').value = " "

                             museumDetail.append(this.createRevForm)
                             

                             
                            }
                         

                     })
                 })
              })
               
               
               
           })


          
         


    }

    planClickHandel = () => {
        museumDetail.innerHTML = " "
        this.nameH4 = document.createElement("h4")
        this.nameH4.innerText = `${this.name}`
        this.hourTag = document.createElement("li")
        this.hourTag.className = "museum-hours"
        this.hourTag.innerText = `Museum Hours: ${this.hours}`
        this.addressTag = document.createElement("li")
        this.addressTag.className = "museum-address"
        this.addressTag.innerText = `Museum Address: ${this.address}`
        museumDetail.append(this.nameH4)
        museumDetail.append(this.hourTag)
        museumDetail.append(this.addressTag)
    }
   

   

}