class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Saroj`
    }
    set password(value){
        this._password = value
    }
}

const Saroj = new User("saroj@ai","abc")
console.log(Saroj.password);
console.log(Saroj.email);
