import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    {name:'Yuran',email:'yuran@gmail.com'}
];


export default {
    async index(req:Request,res:Response){

        return res.json(users)
    },

    async create(req:Request,res:Response){
        const emailServices = new EmailService();

        emailServices.sendMail(
            {name:'Ocar',email:'oscar@gmail.com'},
            {subject:'Bem-vindo ao Sistema',body:'Seja Bem-vindo'});

        return res.send();
    }
};