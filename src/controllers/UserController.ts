import { Request, Response } from "express";

const users = [
    {name:'Yuran',email:'yuran@gmail.com'}
];


export default {
    async index(req:Request,res:Response){

        return res.json(users)
    }
};