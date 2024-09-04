import CepModel from "./modelCep";
class Cep{
    cep: string;
    url: string;
    folder: string;
    constructor(){
        this.cep = "01001000";
        this.url = "https://viacep.com.br/ws/";
        this.folder = "/json/";
    }
    
    async fetch(cep: string){
        cep = cep.replace(/\D/g, '');
        if(cep!=undefined){
            const valida = /^[0-9]{8}$/;
            if(valida.test(cep)){
                this.cep=cep;
            }else{
                alert("CEP inválido.")
                return;
            }
        }else{
            alert("CEP inválido.")
            return;
        }
        var data: CepModel;
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
        }
        await fetch(this.url+this.cep+this.folder, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((response)=>response.json())
        .then((json)=>{
            // console.log(json)
            data = json;
        })
        .catch((erro)=>{
            console.log("Erro encontrado: "+erro);
        });
        return data;
    }

    async getAddress(cep: string, houseNumber: string){
        const data = await this.fetch(cep);
        if(data!=null){
            const msg = ""+data.logradouro+', '+houseNumber+', '+data.bairro+", "+data.localidade+', '+data.uf+', '+data.estado;
            return msg;
        }else{
            return null;
        }
    }
}

export = Cep;