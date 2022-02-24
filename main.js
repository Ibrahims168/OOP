class User {
    constructor(firstName,lastName,age,userName,type,password){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.userName = userName
        this.type = type
        this.password = password
        this.isLoggedIn = false 
        this.lastLoggedIn = 0
        this.isActive = true
    }
    signIn(){
        if (this.isActive) {
            this.isLoggedIn = true
            this.lastLoggedIn = Date.now()
        } else {
            alert('This account has been deleted')
        }
    }
    signOut(){
        this.isLoggedIn = false
    }
    getLastLoggedIn(){
        const date = new Date(this.lastLoggedIn)
        return date.toLocaleTimeString()
    }
    deactivateUser(){
        this.isActive = false
    }
    reactivateUser(){
        this.isActive = true
        alert('Welcome Back '+ this.firstName)
    }
}

const u1 = new User ('Ibrahim','Sharif','22','@sharif','student','test123')
u1.signIn()
console.log(u1);