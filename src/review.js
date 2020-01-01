class ReviewJS {
    constructor(revObj) {
        this.id = revObj.id
        this.content = revObj.content

    this.li = document.createElement("li")
     this.li.className = 'review'
     this.li.innerText = this.content
     
     this.liEdit = document.createElement("button")
      this.liEdit.className = "edit-btn"
      this.liEdit.innerText = "Edit"
      this.li.append(this.liEdit)

      
      
      
     
     this.liDel = document.createElement("button")
      this.liDel.className = 'delete-btn'
      this.liDel.innerText = 'delete'
      this.li.append(this.liDel)
     museumDetail.append(this.li)

     

      this.liEdit.addEventListener("click", this.editHandle)
      this.liDel.addEventListener("click", this.deleteHandle)  
    }

    // revForm = () => {
    //     this.revForm = document.createElement("form")
    //   this.revForm.className = "review-form"
    //   this.revLabel = document.createElement("label")
    //   this.revLabel.innerText = "Please write your review:"
    //   this.reInput = document.createElement("textarea")
    //   this.reInput.name = "new-review"
    //   this.submitInput = document.createElement("input")
    //   this.submitInput.type = "submit"
    //   this.revForm.append(this.revLabel)
    //   this.revForm.append(this.reInput)
    //   this.revForm.append(this.submitInput)
    //   debugger
    // }

      
    editHandle = () => {

       museumDetail.append(this.revForm)
       let area = this.revForm.querySelector("textarea")
           area.placeholder = this.content

    }
    deleteHandle =() => {
        
        Adaptor.deleteReview(this.id)
        .then(deletedRev => {
            
            this.li.remove()
            let foundMuseum = museumJS.all.find(museum => museum.id === deletedRev.museum_id)
            
            let modifiedArray = foundMuseum.reviews.filter(rev => rev.id !== deletedRev.id)
                foundMuseum.reviews = modifiedArray
        })
    }
}