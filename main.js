class User {
    constructor(firstName,lastName,age,userName,type,password){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.userName = userName
        this.type = type
        this.password = password
        this.isLoggedIn = false 
        this.isActive = true
    }

}

const user = new User ('Ibrahim','Sharif','22','Isafadi','student','password123')

console.log(user);