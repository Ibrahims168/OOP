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
        this._id = Date.now()
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

//--------------------adding a teacher ---------------------------

class Teacher extends User{

    constructor(firstName, lastName, age, userName, type, password, subject, salary){
        super(firstName,lastName,age,userName,type,password)
        this.subject = subject
        this.salary = salary
        this.workHours = 0 
    }
    giveMark(){

    }
}

class Student extends User {
    constructor(firstName, lastName, age, userName, type, password, classNum ,grad){
        super(firstName, lastName, age, userName, type, password)
        this.classNum = classNum
        this.grad = grad
    }
}





const u1 = new User ('Ibrahim','Sharif',22,'@sharif','student','test123')
const u2 = new Teacher ('rami', 'nasr', 31, '@teach1', 'teacher', 'pas443', 'Arabic', '2000$')
const u3 = new Student ('ashraf', 'Safadi', 19, '@user1', 'student', 'password', 5, '10th')
u1.signIn()
console.log(u1);