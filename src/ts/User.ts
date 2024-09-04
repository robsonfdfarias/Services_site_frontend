import modelUser from "./modelUser";

class User{
    name: string;
    email: string;
    fone: string;
    private password: string;
    photo: string;
    profession: string;
    constructor(user: modelUser){
        this.name = user.name;
        this.email = user.email;
        this.fone = user.fone;
        this.password = user.password;
        this.photo = user.photo;
        this.profession = user.profession;
    }
    getPass(){
        return this.password;
    }
    setPass(pass: string){
        this.password = pass;
    }
    getData(){
        return 'Nome: '+this.name+', Email: '+this.email;
    }
}

export = User;