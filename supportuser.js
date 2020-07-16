class SupportUser extends User {
    constructor (name, email, permissionLevel = 2) {
        super(name, email)

        this.permissionLevel = permissionLevel
        this.lastUserHelped = null
    }

    changeEmailAddressForUser (user, newEmailAddress) {
        user.changeEmail(newEmailAddress)
        this.lastUserHelped = user
    }
}