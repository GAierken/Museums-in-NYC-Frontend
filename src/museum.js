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
         this.nameLiTag.className = "museum"
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
        this.imgTag.width = '400'
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
        
    }
    planClickHandel = () => {
        museumDetail.innerHTML = " "
        this.hourTag = document.createElement("li")
        this.hourTag.className = "museum-hours"
        this.hourTag.innerText = `${this.hours}`
        this.addressTag = document.createElement("li")
        this.addressTag.className = "museum-address"
        this.addressTag.innerText = `${this.address}`
        museumDetail.append(this.hourTag)
        museumDetail.append(this.addressTag)
    }



}