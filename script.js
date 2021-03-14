class Users {
    constructor(data) {
        this.data = data
    }
    edit(obj) {
        for (let key1 in obj) {
            if (key1 !== undefined) {
                this.data[key1] = obj[key1]
            }
        }
    }
    get() {
        console.log(this.data);
    }
}

class Contacts extends Users{
    constructor(data) {
        super(data)
        this.dataUsers = []
    }
    add(data){
        this.dataUsers.push(data)
        // for (let key of this.dataUsers) {
        //     console.log(key.id);
        //     console.log(this.dataUsers);
        // }
        
    }
    edit(id, obj) {
        super.edit(obj)
        for (let key of this.dataUsers) {
            if (+key.id === 2) {
                super.edit(obj)
                console.log(key);
            }
            // console.log(key.id);
        }
        

    }
}

const list = new Contacts()
list.add({
    id: '1',
    name: 'Nick',
    email: 'Tesa@gmail.com',
    address: 'Parokhonsk',
    phone: '+375 44 646-44-44'
})
list.add({
    id: '2',
    name: 'Valya',
    email: 'Valya@gmail.com',
    address: 'Lobcha',
    phone: '+375 44 222-22-22'
})
list.edit(1, {
    email: 'Nick@gmail.com',
    address: 'Pinsk',
})