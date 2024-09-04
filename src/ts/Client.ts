// import Cep from "./Cep";
import Cep from "./Cep";
import modelClient from "./modelClient";
class Client{
    name: string;
    cep: string;
    houseNumber: string;
    email: string;
    phone: string;
    constructor(cliente: modelClient){
        this.name = cliente.name;
        this.cep = cliente.cep;
        this.houseNumber = cliente.houseNumber;
        this.email = cliente.email;
        this.phone = cliente.phone;
    }
    async getData(cep: Cep){
        const dd = await this.getAddress(cep);
        var msg = 'Cliente: '+this.name;
            msg += '<br>Email: '+this.email;
            msg += '<br>Telefone: '+this.phone;
            msg += '<br>Endereço: '+dd;
            return msg;
    }
    async getAddress(cep: Cep){
        // const cep = new Cep();
        const data = await cep.getAddress(this.cep, this.houseNumber);
        return data;
    }
}

export = Client;