type menuOptions = '' | 'all' | 'ChatBot' | 'GeradorDeImagem' | 'AnimadorDeImagem'

export const createMenuObject = (activeMenu:menuOptions)=>{
    let returnObject = {
        all:false,
        ChatBot: false,
        GeradorDeImagem: false,
        AnimadorDeImagem:false
    }
    if(activeMenu!== ''){
        returnObject[activeMenu] = true
    }
    return returnObject
}