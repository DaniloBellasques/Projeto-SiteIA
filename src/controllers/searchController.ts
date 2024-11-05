import { Request, Response } from "express";
import {IA} from '../models/ia'
import { createMenuObject } from "../helpers/createMenuObjects";
export const search = (req:Request, res:Response)=>{
    let query: string = req.query.q as string
    let list = IA.getFromName(query)
    res.render('pages/pages',{
        menu: createMenuObject(''),
        list
    })
}

