class ReviewJS {
    constructor(revObj) {
        this.id = revObj.id
        this.content = revObj.content

    this.li = document.createElement("li")
     this.li.className = 'review'
     this.li.innerText = this.content
     museumDetail.append(this.li)
    }
}