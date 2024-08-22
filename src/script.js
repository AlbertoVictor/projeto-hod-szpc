//- passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        desativarBotaoSelecionado();
        
        marcarBotaoSelecionado(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        esconderInformacoesAtivas();

        mostrarInformacoesAtivas(indice)
    })
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}
function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}
function esconderImagemAtiva(){
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa');
}
function mostrarImagemDeFundo(indice){
    imagens[indice].classList.add('ativa')
}
function esconderInformacoesAtivas(){
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}
function mostrarInformacoesAtivas(indice){
    informacoes[indice].classList.add('ativa')
}
