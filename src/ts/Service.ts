import Client from "./Client";
import modelService from "./modelService";
import User from "./User";

class Service{
    startDate: string;
    endDate: string; //Data prevista para a conclusão do serviço
    postDate: string;
    typeOfService: number;
    description: string;
    idClient: string;
    idUser: string; //quem fez o atendimento
    serviceValue: number;
    complited: boolean;
    comment: string;
    client?: Client;
    user?: User;
    constructor(service: modelService){
        this.startDate=service.startDate;
        this.endDate=service.endDate;
        this.postDate=service.postDate;
        this.typeOfService=service.typeOfService;
        this.description=service.description;
        this.idClient=service.idClient;
        this.idUser=service.idUser;
        this.serviceValue=service.serviceValue;
        this.complited=service.complited;
        this.comment=service.comment;
    }
    setClient(client: Client){
        this.client = client;
    }
    setUser(user: User){
        this.user = user;
    }
    getClient(){
        //
    }
    getUser(){
        //
    }

}

export = Service;