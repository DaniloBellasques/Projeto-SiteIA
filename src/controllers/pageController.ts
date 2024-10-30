import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObjects";

export const home = (req:Request, res:Response) =>{
    res.render('pages/pages', {
        menu:createMenuObject("all"),
        
        banner: {
            title: 'Todas as ferramentas disponíveis',
            background: 'inteligencia-artificial.jpg'
        }
    })
}

export const ChatBot = (req:Request, res:Response) =>{
    res.render('pages/pages', {
        menu:createMenuObject("ChatBot"),
        banner: {
            title: 'Todas as ferramentas de chatbot disponíveis',
            background: 'chatbot-640w.webp'
        }
    })
}

export const GeradorDeImagem = (req:Request, res:Response) =>{
    
    res.render('pages/pages', {
        menu:createMenuObject("GeradorDeImagem"),
        banner: {
            title: 'Todas as ferramentas de Geração de imagens disponíveis',
            background: 'BANNERIMAGEM.webp'
        }
    })
}

export const AnimadorDeImagem = (req:Request, res:Response) =>{
    res.render('pages/pages', {
        menu:createMenuObject("AnimadorDeImagem"),
        banner: {
            title: 'Todas as ferramentas de animação disponíveis',
            background: 'ANIMACAO.webp'
        }
    })
}