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

    this.revForm = document.createElement("form")
      this.revForm.className = "review-form"
      this.revLabel = document.createElement("label")
      this.revLabel.innerText = "Please write your review:"
      this.reInput = document.createElement("textarea")
      this.reInput.name = "new-review"
      this.submitInput = document.createElement("input")
      this.submitInput.type = "submit"
      this.revForm.append(this.revLabel)
      this.revForm.append(this.reInput)
      this.revForm.append(this.submitInput)
      
     
     this.liDel = document.createElement("button")
      this.liDel.className = 'delete-btn'
      this.liDel.innerText = 'delete'
      this.li.append(this.liDel)
     museumDetail.append(this.li)

     

      this.liEdit.addEventListener("click", this.editHandle)
      this.liDel.addEventListener("click", this.deleteHandle)  
    }
    editHandle = () => {
       museumDetail.append(this.revForm)

    }
    deleteHandle =() => {
        console.log("hello")
    }
}