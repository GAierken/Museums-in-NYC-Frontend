class UserJS {
    static all = []
    constructor(userObj) {

        this.id = userObj.id
        this.name = userObj.name
        this.reviews = userObj.reviews
        this.likes = userObj.likes
        this.dislikes = userObj.dislikes
    
        UserJS.all.push(this)
        
    }
}