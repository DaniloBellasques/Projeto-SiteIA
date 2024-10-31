/*Precisaremos de 3 funções diferentes

    1- PEGAR TODOS OS ITENS
    2- FILTRAR POR TIPO
    3= FILTRAR ITENS PELO NOME*/ 
    type IAType = 'ChatBot' | 'GeradorDeImagem' | 'AnimadorDeImagem'

    type IA = {
        type: IAType
        image: string,
        name: string
    }

   


    const data: IA[] = [
        { 
            type: 'ChatBot', 
            image: 'perplexity.jpeg', 
            name: 'Perplexity AI'
        }, 
        { 
            type: 'ChatBot', 
            image: 'chatgpt555.png', 
            name: 'Chat GPT' 
            
        }, 
        { 
            type: 'ChatBot', 
            image: 'geme.jpg', 
            name: 'Gemini'
            
        }, 
        { 
            type: 'ChatBot', 
            image: 'Copilot.jpg', 
            name: 'Copilot'
            
        }, 
        { 
            type: 'ChatBot', 
            image: 'Meta-AI_Updated-jpg.webp', 
            name: 'Meta AI'
        }, 
        { 
            type: 'GeradorDeImagem', 
            image: 'Leonardo-AI-logo.jpg', 
            name: 'Leonardo AI'
            
        }, 
        { 
            type: 'GeradorDeImagem', 
            image: 'Midjourney.jpg', 
            name: 'Midjourney'
        }, 
        { 
            type: 'GeradorDeImagem', 
            image: 'flux.png', 
            name: 'Flux AI'
        }, 
        { 
            type: 'GeradorDeImagem', 
            image: 'seaart-768x368.jpg', 
            name: 'SeaArt'
            
        }, 
        
        { 
            type: 'GeradorDeImagem', 
            image: 'Dalle-3--scaled.jpg', 
            name: 'DALL-E3'
        }, 
        { 
            type: 'AnimadorDeImagem', 
            image: 'lumaai.png', 
            name: 'Luma AI'
            
        }, 
        { 
            type: 'AnimadorDeImagem', 
            image: 'hai.png', 
            name: 'Hailuo AI' 
        }, 
        { 
            type: 'AnimadorDeImagem', 
            image: 'pik.jpg', 
            name: 'Pika AI'
            
        }, 
        { 
            type: 'AnimadorDeImagem', 
            image: 'runway-ml-logo.jpg', 
            name: 'Runway'
        }, 
    
        { 
            type: 'AnimadorDeImagem', 
            image: 'kaiber.png', 
            name: 'Kaiber'
        }, 
    
    ]

    export const IA = {
        /*VAMOS RETORNAR TODOS OS ITENS PARA EXIBIR NA PÁGINA PRINCIPAL ESSA FUNÇÃO VAI RETORNAR DATA QUE É ONDE TÃO NOSSOS ITENS*/
        getAll: () =>{
            return data
        },
        getFromType: (type: IAType): IA[]=>{
            return data.filter(item =>{
                //Se o item type for igual ao type que eu recebi no meu parametro (IATYPE)
                //ENTAO RETORNE TRUE PARA ESSE ITEM
                if(item.type == type){
                    return true
                }else{
                    return false
                }
            })
        },
        getFromName:(name: string): IA[]=>{
            return data.filter(item=>{
                if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
                    return true
                }else{
                    return false
                }
            })
        }

    }