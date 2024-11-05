/*Precisaremos de 3 funções diferentes

    1- PEGAR TODOS OS ITENS
    2- FILTRAR POR TIPO
    3= FILTRAR ITENS PELO NOME*/ 
    type IAType = 'ChatBot' | 'Gerador De Imagem' | 'Animador De Imagem'

    type IA = {
        type: IAType
        image: string,
        name: string,
        descricao: string
    }

   


    const data: IA[] = [
        { 
            type: 'ChatBot', 
            image: 'perplexity.jpeg', 
            name: 'Perplexity AI',
            descricao:'Criam textos, traduzem idiomas e respondem a perguntas.'
        }, 
        { 
            type: 'ChatBot', 
            image: 'chatgpt555.png', 
            name: 'Chat GPT',
            descricao:'Criam textos, traduzem idiomas e respondem a perguntas.'
            
        }, 
        { 
            type: 'ChatBot', 
            image: 'geme.jpg', 
            name: 'Gemini',
            descricao:'Criam textos, traduzem idiomas e respondem a perguntas.'
            
        }, 
        { 
            type: 'ChatBot', 
            image: 'Copilot.jpg', 
            name: 'Copilot',
            descricao:'Criam textos, traduzem idiomas e respondem a perguntas.'
            
        }, 
        { 
            type: 'ChatBot', 
            image: 'Meta-AI_Updated-jpg.webp', 
            name: 'Meta AI',
            descricao:'Criam textos, traduzem idiomas e respondem a perguntas.'
        }, 
        { 
            type: 'Gerador De Imagem', 
            image: 'Leonardo-AI-logo.jpg', 
            name: 'Leonardo AI',
            descricao:'Transformam descrições em imagens realistas ou artísticas.'
            
        }, 
        { 
            type: 'Gerador De Imagem', 
            image: 'Midjourney.jpg', 
            name: 'Midjourney',
            descricao:'Transformam descrições em imagens realistas ou artísticas.'
        }, 
        { 
            type: 'Gerador De Imagem', 
            image: 'flux.png', 
            name: 'Flux AI',
            descricao:'Transformam descrições em imagens realistas ou artísticas.'
        }, 
        { 
            type: 'Gerador De Imagem', 
            image: 'seaart-768x368.jpg', 
            name: 'SeaArt',
            descricao:'Transformam descrições em imagens realistas ou artísticas.'
            
        }, 
        
        { 
            type: 'Gerador De Imagem', 
            image: 'Dalle-3--scaled.jpg', 
            name: 'DALL-E3',
            descricao:'Transformam descrições em imagens realistas ou artísticas.'
        }, 
        { 
            type: 'Animador De Imagem', 
            image: 'lumaai.png', 
            name: 'Luma AI',
            descricao:'Oferecem diversas ferramentas de IA para diferentes áreas, como edição de vídeo e desenvolvimento de apps.'
            
        }, 
        { 
            type: 'Animador De Imagem', 
            image: 'hai.png', 
            name: 'Hailuo AI',
            descricao:'Oferecem diversas ferramentas de IA para diferentes áreas, como edição de vídeo e desenvolvimento de apps.'
        }, 
        { 
            type: 'Animador De Imagem', 
            image: 'pik.jpg', 
            name: 'Pika AI',
            descricao:'Oferecem diversas ferramentas de IA para diferentes áreas, como edição de vídeo e desenvolvimento de apps.'
            
        }, 
        { 
            type: 'Animador De Imagem', 
            image: 'runway-ml-logo.jpg', 
            name: 'Runway',
            descricao:'Oferecem diversas ferramentas de IA para diferentes áreas, como edição de vídeo e desenvolvimento de apps.'
        }, 
    
        { 
            type: 'Animador De Imagem', 
            image: 'kaiber.png', 
            name: 'Kaiber',
            descricao:'Oferecem diversas ferramentas de IA para diferentes áreas, como edição de vídeo e desenvolvimento de apps.'
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