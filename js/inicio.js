function renderizar() {
    let produtos = document.getElementById("espaco-produtos")

    let listaProdutos = [
    {
        imagem:"img/produto.png" ,
        titulo:"Produto" ,
        preco:"R$ 000,00" ,
        descricao:"parcelado em x s/ juros"
    },
   
   
    ]
    let template = "";

    for (let index = 0; index < listaProdutos.length; index++) {
        const produto = listaProdutos[index];
    
    template += `<div class="cardprodutos">
    <img src="${produto.imagem}" alt="">
  <h1>${produto.titulo}</h1>
  <p>${produto.preco}</p>
  <p1>${produto.descricao}</p1>
  
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