class User {
    constructor (name, email) {
        this.name = name
        this.email = email
        this.creationDate = new Date()
    }

    changeEmail (newEmailAddress) {
        this.email = newEmailAddress
    }
}