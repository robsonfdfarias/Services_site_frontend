"use strict";
class User {
    constructor(user) {
        this.name = user.name;
        this.email = user.email;
        this.fone = user.fone;
        this.password = user.password;
        this.photo = user.photo;
        this.profession = user.profession;
    }
    getPass() {
        return this.password;
    }
    setPass(pass) {
        this.password = pass;
    }
    getData() {
        return 'Nome: ' + this.name + ', Email: ' + this.email;
    }
}
module.exports = User;
