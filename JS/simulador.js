function rosear(){

    let pFilhas = document.querySelectorAll("div>p")

    for(let i = 0; i < pFilhas.length; i++ ){
        pFilhas[i].style.color = "pink";
    }

}

function lista(){

        let vetorLista ={

            nome:'Mitch Marner',
            acao:'MOSTRAR',
            nome:'Matthews Knies',
            acao:'IGNORAR',
            nome: 'John Tavares',
            acao:'MOSTRAR',
        }
        let pMostrar = createElement('p');
        let pDiv = createElement('div')
    
            for(let  i = 0 ; i < vetorLista.length; i++){
                if (vetorLista.acao[i] === 'MOSTRAR'){
                    pMostrar = vetorLista.acao[i];
                    pDiv.appenChild(pMostrar);
                }
        }
}
