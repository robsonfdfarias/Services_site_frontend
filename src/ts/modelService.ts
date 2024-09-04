type modelService = {
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
}

export = modelService;