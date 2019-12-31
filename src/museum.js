let museumList = document.getElementById("museums-list")

class museumJS {
    static all = []
    constructor(museumObj) {
        ///this attributes
        this.id = museumObj.id 
        this.name = museumObj.name
        this.address = museumObj.address
        this.description = museumObj.description
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
}