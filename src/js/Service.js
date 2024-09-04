"use strict";
class Service {
    constructor(service) {
        this.startDate = service.startDate;
        this.endDate = service.endDate;
        this.postDate = service.postDate;
        this.typeOfService = service.typeOfService;
        this.description = service.description;
        this.idClient = service.idClient;
        this.idUser = service.idUser;
        this.serviceValue = service.serviceValue;
        this.complited = service.complited;
        this.comment = service.comment;
    }
    setClient(client) {
        this.client = client;
    }
    setUser(user) {
        this.user = user;
    }
    getClient() {
        //
    }
    getUser() {
        //
    }
}
module.exports = Service;
