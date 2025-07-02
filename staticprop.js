class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username ${this.username}`);
    }
    static createId(){
        return`123`
    }
}

const yana= new User("yana")
// console.log(yana.createId())

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const phone= new teacher("iphone","i@phone.com")
console.log(phone.createId());

// static stop method and property to access