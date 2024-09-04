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
class Cep {
    constructor() {
        this.cep = "01001000";
        this.url = "https://viacep.com.br/ws/";
        this.folder = "/json/";
    }
    fetch(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            cep = cep.replace(/\D/g, '');
            if (cep != undefined) {
                const valida = /^[0-9]{8}$/;
                if (valida.test(cep)) {
                    this.cep = cep;
                }
                else {
                    alert("CEP inválido.");
                    return;
                }
            }
            else {
                alert("CEP inválido.");
                return;
            }
            var data;
            data = {
                "cep": '89260854',
                "logradouro": '',
                "complemento": '',
                "unidade": '',
                "bairro": '',
                "localidade": '',
                "uf": '',
                "estado": '',
                "regiao": '',
                "ibge": 0,
                "gia": 0,
                "ddd": '',
                "siafi": 0
            };
            yield fetch(this.url + this.cep + this.folder, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then((response) => response.json())
                .then((json) => {
                // console.log(json)
                data = json;
            })
                .catch((erro) => {
                console.log("Erro encontrado: " + erro);
            });
            return data;
        });
    }
    getAddress(cep, houseNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.fetch(cep);
            if (data != null) {
                const msg = "" + data.logradouro + ', ' + houseNumber + ', ' + data.bairro + ", " + data.localidade + ', ' + data.uf + ', ' + data.estado;
                return msg;
            }
            else {
                return null;
            }
        });
    }
}
module.exports = Cep;
