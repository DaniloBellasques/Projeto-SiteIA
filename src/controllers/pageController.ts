import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObjects";
//importando a model
import {IA} from '../models/ia'

export const home = (req:Request, res:Response) =>{
    let list = IA.getAll()
    res.render('pages/pages', {
        menu:createMenuObject("all"),
        
        banner: {
            title: 'Todas as ferramentas disponíveis',
            background: 'inteligencia-artificial.jpg'
        },
        list
    })
}

export const ChatBot = (req:Request, res:Response) =>{
    let list = IA.getFromType('ChatBot')
    res.render('pages/pages', {
        menu:createMenuObject("ChatBot"),
        banner: {
            title: 'Todas as ferramentas de chatbot disponíveis',
            background: 'chatbot-640w.webp'
        },
        list
    })
}

export const GeradorDeImagem = (req:Request, res:Response) =>{
    let list = IA.getFromType('Gerador De Imagem')
    res.render('pages/pages', {
        menu:createMenuObject("GeradorDeImagem"),
        banner: {
            title: 'Todas as ferramentas de Geração de imagens disponíveis',
            background: 'BANNERIMAGEM.webp'
        },
        list
    })
}

export const AnimadorDeImagem = (req:Request, res:Response) =>{
    let list = IA.getFromType('Animador De Imagem')
    res.render('pages/pages', {
        menu:createMenuObject("AnimadorDeImagem"),
        banner: {
            title: 'Todas as ferramentas de animação disponíveis',
            background: 'ANIMACAO.webp'
        },
        list
    })
}