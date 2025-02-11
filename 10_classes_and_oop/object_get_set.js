const user = {
    _email: 'saroj@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(user)

console.log(tea.email);
