class Users {
    constructor(idData, nameData, emailData, addressData, phoneData) {
        this.data = {id: idData, name: nameData, email: emailData, address: addressData, phone: phoneData}
    }
    edit(obj) {
        for (let key in obj) {
            if (obj[key] !== undefined){
                this.data[key] = obj[key]
            }
        }
    }
    get() {
        return this.data
    }
}

class Contacts{
    constructor() {
        this.data = []
    }
    add(idData, nameData, emailData, addressData, phoneData){
        let newUser = new Users(idData, nameData, emailData, addressData, phoneData)
        // console.log(newUser.data);
        this.data.push(newUser.data)
    }
    edit(id, obj) {
        for (let key of this.data) {
            if (+key.id === 2) {
                for (let key1 in key) {
                    if (obj[key1] !== undefined){
                        key[key1] = obj[key1]
                    }
                }
            }
        }
        // console.log(this.data);
    }
    remove(id) {
        for (let i=0; i< this.data.length; i++) {
            if (this.data[i].id === id) {
                this.data.splice(i, 1)
            }
        }
        // console.log(this.data);
    }
    get() {
        return this.data
    }
}

class ContactsApp extends Contacts{

}


const me = new Users(3, 'Nick', 'Tesa@gmail.com', 'Parokhonsk', '+375 44 646-44-44')
me.edit({
    email: 'Nick@gmail.com',
    address: 'Pinsk',
})

const list = new Contacts()
list.add(3, 'Nick', 'Tesa@gmail.com', 'Parokhonsk', '+375 44 646-44-44')
list.add(2, 'Valya', 'Valya@gmail.com', 'Lobcha', '+375 44 222-22-22')
list.add(6, 'Kostya', 'Kostyaa@gmail.com', 'Luninets', '+375 44 111-11-11')
list.add(4, 'John', 'John@gmail.com', 'Memphis', '+375 44 222-22-22')
list.edit(2, {
    email: 'Nick@gmail.com',
    address: 'Pinsk',
})
list.remove(3)