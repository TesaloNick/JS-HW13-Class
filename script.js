class Contacts {

}

class Users {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.adress = data.adress
        this.phone = data.phone

    }
    edit(obj) {
        for (let key in obj) {
            if (key !== undefined) {
                this[key] = obj[key]
            }
            console.log(this[key]);

        }
    }
}
const user = new Users({
    id: 'qq',
    name: 'qq',
    email: 'qq',
    adress: 'qq',
    phone: 'qq'
})
user.edit({
    id: 'ddddd',
    // name: 'qq',
    email: 'ddddd',
    adress: 'ddddd',
    // phone: 'qq'
})
console.log(user);