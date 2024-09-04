"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Client {
    constructor(cliente) {
        this.name = cliente.name;
        this.cep = cliente.cep;
        this.houseNumber = cliente.houseNumber;
        this.email = cliente.email;
        this.phone = cliente.phone;
    }
    getData(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            const dd = yield this.getAddress(cep);
            var msg = 'Cliente: ' + this.name;
            msg += '<br>Email: ' + this.email;
            msg += '<br>Telefone: ' + this.phone;
            msg += '<br>Endereço: ' + dd;
            return msg;
        });
    }
    getAddress(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            // const cep = new Cep();
            const data = yield cep.getAddress(this.cep, this.houseNumber);
            return data;
        });
    }
}
module.exports = Client;
