function renderizar() {
    let produtos = document.getElementById("espaco-produtos")

    let listaProdutos = [
    {
        imagem:"img/Rectangle 13.png" ,
        titulo:"Console" ,
        preco:"R$ 1.200,00" 
    },
    {
        imagem:"img/Rectangle 13.png" ,
        titulo:"Console" ,
        preco:"R$ 1200,00" 
    },
    {
        imagem:"img/Rectangle 13.png" ,
        titulo:"Console" ,
        preco:"R$ 1200,00" 
    },
    {
        imagem:"img/Rectangle 13.png" ,
        titulo:"Console" ,
        preco:"R$ 1200,00" 
    },
    {
        imagem:"img/Rectangle 13.png" ,
        titulo:"Console" ,
        preco:"R$ 1200,00" 
    },
    {
        imagem:"img/Rectangle 13.png" ,
        titulo:"Console" ,
        preco:"R$ 1200,00" 
    },
    {
        imagem:"img/Rectangle 13.png" ,
        titulo:"Console" ,
        preco:"R$ 1200,00" 
    },
    {
        imagem:"img/Rectangle 13.png" ,
        titulo:"Console" ,
        preco:"R$ 1200,00" 
    },
    {
        imagem:"img/Rectangle 13.png" ,
        titulo:"Console" ,
        preco:"R$ 1200,00" 
    },
   
    ]
    let template = "";

    for (let index = 0; index < listaProdutos.length; index++) {
        const produto = listaProdutos[index];
    
    template += `<div class="cardprodutos">
    <img src="${produto.imagem}" alt="">
  <h1>${produto.titulo}</h1>
  <p>${produto.preco}</p>
  
  </div>`
        
    }
    
    produtos.innerHTML = template


}

$(document).ready(function(){
    $("#destaque").click(function(){
        $("#menuDestaques").toggleClass("ativado")
    })
})

$(document).ready(function(){
    $("#configuracoesHeader").click(function(){
        $("#menuConfiguracoes").toggleClass("ativado")
    })
})