class ReviewJS {
    constructor(revObj) {
        
        this.id = revObj.id
        this.content = revObj.content
        this.user_id = revObj.user_id
        this.museum_id = revObj.museum_id
       
        
       
        
    
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

    
      
    editHandle = () => {
       
      let revForm = document.createElement("form")
          revForm.className = 'rev-form'
        let revLabel = document.createElement("label")
            revLabel.className = "rev-label"
            revLabel.innerText = "Please edit your feedback:"
        let revTextarea = document.createElement('textarea')
            revTextarea.className = 'rev-textarea'
            revTextarea.placeholder = `${this.content}`
        let revSubmit = document.createElement("input")
            revSubmit.type = "submit"
            revSubmit.className = 'rev-submit'
            revSubmit.innerText = 'Submit'
            revForm.append(revLabel, revTextarea, revSubmit)
           this.li.append(revForm)
        revForm.addEventListener("submit", this.handleSubmit)

    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.content = evt.target.querySelector("textarea").value
        
        Adaptor.editReview(this)
        .then(editRev => {
           this.li.innerText = this.content
           alert('Your review is updated!')
            
        })
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