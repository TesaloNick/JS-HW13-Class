class Users {
    constructor(idData, nameData, emailData, addressData, phoneData) {
        this.data = {
            id: idData, 
            name: nameData, 
            email: emailData, 
            address: addressData, 
            phone: phoneData
        }
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
        this.add = this.add.bind(this)
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
    }
    add(event){
        event.preventDefault()
        let newUser = new Users(event.currentTarget[0].value, event.currentTarget[1].value, event.currentTarget[2].value,  event.currentTarget[3].value, event.currentTarget[4].value)
        // console.log(newUser.data);
        this.data.push(newUser.data)
        console.log(this.data);
    }
    edit(event) {
        event.preventDefault()
        for (let key of this.data) {
            // console.log(key);
            if (+key.id === +event.currentTarget[0].value) {
                let arr = []
                for (let key1 in key) {
                    arr.push(key1)
                }
                console.log(arr);
                for (let i=1; i < event.currentTarget.length-1; i++) {
                    if (event.currentTarget[i].value !== undefined) {
                        // console.log(key[arr[i]]);
                        // console.log(event.currentTarget[i].value);
                        key[arr[i]] = event.currentTarget[i].value
                        // console.log(this.data);
                    }
                }
                // for (let key1 in key) {
                    // if (obj[key1] !== undefined){
                    //     key[key1] = obj[key1]
                    // }
                // }
            }
        }
        console.log(this.data);
    }
    remove(event) {
        event.preventDefault()
        for (let i=0; i < this.data.length; i++) {
            if (this.data[i].id === event.currentTarget[0].value) {
                this.data.splice(i, 1)
            }
        }
        console.log(this.data);
    }
    get() {
        return this.data
    }
}

class ContactsApp extends Contacts{
    app(){
        let div = document.createElement('div')
        div.classList.add('contacts')
        document.body.appendChild(div)

        let formAdd = document.createElement('form') // добавление контакта
        formAdd.classList.add('form-add')
        div.appendChild(formAdd)
        let titleAdd = document.createElement('h1')
        titleAdd.innerHTML = "Добавить контакт"
        formAdd.appendChild(titleAdd)
        let idAdd = document.createElement('input')
        idAdd.classList.add('id-add')
        idAdd.setAttribute('type', 'number')
        formAdd.appendChild(idAdd)
        let nameAdd = document.createElement('input')
        nameAdd.classList.add('name-add')
        nameAdd.setAttribute('type', 'text')
        formAdd.appendChild(nameAdd)
        let emailAdd = document.createElement('input')
        emailAdd.classList.add('email-add')
        emailAdd.setAttribute('type', 'email')
        formAdd.appendChild(emailAdd)
        let adddressAdd = document.createElement('input')
        adddressAdd.classList.add('address-add')
        adddressAdd.setAttribute('type', 'text')
        formAdd.appendChild(adddressAdd)
        let phoneAdd = document.createElement('input')
        phoneAdd.classList.add('phone-add')
        phoneAdd.setAttribute('type', 'tel')
        formAdd.appendChild(phoneAdd)
        idAdd.setAttribute('placeholder', 'id')
        nameAdd.setAttribute('placeholder', 'name')
        emailAdd.setAttribute('placeholder', 'email')
        adddressAdd.setAttribute('placeholder', 'adddress')
        phoneAdd.setAttribute('placeholder', 'phone')
        let buttonAddContact = document.createElement('button')
        buttonAddContact.classList.add('button-add-contact')
        buttonAddContact.innerHTML = "Добавить контакт"
        formAdd.appendChild(buttonAddContact)

        let formEdit = document.createElement('form') // изменение контакта
        formEdit.classList.add('form-edit')
        div.appendChild(formEdit)
        let titleEdit = document.createElement('h1')
        titleEdit.innerHTML = "Изменить контакт"
        formEdit.appendChild(titleEdit)
        let idEdit = document.createElement('input')
        idEdit.classList.add('id-edit')
        formEdit.appendChild(idEdit)
        let nameEdit = document.createElement('input')
        nameEdit.classList.add('name-edit')
        formEdit.appendChild(nameEdit)
        let emailEdit = document.createElement('input')
        emailEdit.classList.add('email-edit')
        formEdit.appendChild(emailEdit)
        let adddressEdit = document.createElement('input')
        adddressEdit.classList.add('adddress-edit')
        formEdit.appendChild(adddressEdit)
        let phoneEdit = document.createElement('input')
        phoneEdit.classList.add('phone-edit')
        formEdit.appendChild(phoneEdit)
        idEdit.setAttribute('type', 'number')
        nameEdit.setAttribute('type', 'text')
        emailEdit.setAttribute('type', 'email')
        adddressEdit.setAttribute('type', 'text')
        phoneEdit.setAttribute('type', 'tel')
        idEdit.setAttribute('placeholder', 'id')
        nameEdit.setAttribute('placeholder', 'name')
        emailEdit.setAttribute('placeholder', 'email')
        adddressEdit.setAttribute('placeholder', 'adddress')
        phoneEdit.setAttribute('placeholder', 'phone')
        let buttonEditContact = document.createElement('button')
        buttonEditContact.classList.add('button-edit-contact')
        buttonEditContact.innerHTML = "Изменить контакт"
        formEdit.appendChild(buttonEditContact)

        let formRemove = document.createElement('form') // удаление контакта
        formRemove.classList.add('form-remove')
        div.appendChild(formRemove)
        let titleRemove = document.createElement('h1')
        titleRemove.innerHTML = "Удалить контакт"
        formRemove.appendChild(titleRemove)
        let idRemove = document.createElement('input')
        idRemove.classList.add('phone-remove')
        idRemove.setAttribute('type', 'number')
        idRemove.setAttribute('placeholder', 'id')
        formRemove.appendChild(idRemove)
        let buttonRemoveContact = document.createElement('button')
        buttonRemoveContact.classList.add('button-remove-contact')
        buttonRemoveContact.innerHTML = "Удалить контакт"
        formRemove.appendChild(buttonRemoveContact)
    }
    onAdd(){
        document.querySelector('.form-add').addEventListener('submit', this.add)
    }
    onEdit(){
        document.querySelector('.form-edit').addEventListener('submit', this.edit)
    }
    onRemove(){
        document.querySelector('.form-remove').addEventListener('submit', this.remove)
    }
}


const list = new ContactsApp()
list.app()
list.onAdd()
list.onEdit()
list.onRemove()
// list.add()
// list.add(2, 'Valya', 'Valya@gmail.com', 'Lobcha', '+375 44 222-22-22')
// list.add(6, 'Kostya', 'Kostyaa@gmail.com', 'Luninets', '+375 44 111-11-11')
// list.add(4, 'John', 'John@gmail.com', 'Memphis', '+375 44 222-22-22')
// list.edit(2, {
//     email: 'Nick@gmail.com',
//     address: 'Pinsk',
// })
// list.remove(3)

// const list1 = new ContactsApp()
// list1.add(4, 'John', 'John@gmail.com', 'Memphis', '+375 44 222-22-22')
// list1.app()
// console.log(list1);
