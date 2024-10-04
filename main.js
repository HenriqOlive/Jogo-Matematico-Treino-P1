//Selecionando os botões
const btnGera = document.querySelector('#gera-equacao');
const btnValida = document.querySelector('#valida-resp');

//Selecionando campos de mensagem
const equacao = document.querySelector('#campo-equacao'); 
const resultado = document.querySelector('#msg-resposta'); 

const resposta = document.querySelector('#resposta');

//Atribuindo evento ao botão de gerar equação
let stNum = null; 
let ndNum = null;
const operacoes = ['+', '-', 'x', '/'];
let randChoseop = null;

btnGera.addEventListener('click', () => {
    geraValores();
    equacao.style.color = 'black';
    equacao.textContent = `${stNum} ${opChose} ${ndNum}`;
    limpaCampos();
})

let geraValores = () => {
    randChoseop = Math.trunc(Math.random() * 4);
    opChose = operacoes[randChoseop];
    stNum = Math.trunc(Math.random() * 9);
    ndNum = Math.trunc(Math.random() * 9);
}

//Atribuindo evento ao botão de validar resposta
let respostaValue = null;

btnValida.addEventListener('click', () => {
    respostaValue = Number(resposta.value);
    verificaResposta();    
})

const limpaCampos = () => {
    resultado.style.color = 'white';
    resultado.textContent = '-';
}

const verificaResposta = () => {
    if(opChose == '+'){
        if(stNum + ndNum == respostaValue){
            resultado.style.color = 'blue';
            resultado.textContent = 'Parabéns! Você acertou!';        
        }else{
            resultado.style.color = 'red';
            resultado.textContent = `Deu ruim! A resposta correta é ${stNum + ndNum}`;
        }
    }else if(opChose == '-'){
        if(stNum - ndNum == respostaValue){
            resultado.style.color = 'blue';
            resultado.textContent = 'Parabéns! Você acertou!';        
        }else{
            resultado.style.color = 'red';
            resultado.textContent = `Deu ruim! A resposta correta é ${stNum - ndNum}`;
        }
    }else if(opChose == 'x'){
        if(stNum * ndNum == respostaValue){
            resultado.style.color = 'blue';
            resultado.textContent = 'Parabéns! Você acertou!';        
        }else{
            resultado.style.color = 'red';
            resultado.textContent = `Deu ruim! A resposta correta é ${stNum * ndNum}`;
        }
    }else{
        if(stNum / ndNum == respostaValue){
            resultado.style.color = 'blue';
            resultado.textContent = 'Parabéns! Você acertou!';        
        }else{
            resultado.style.color = 'red';
            resultado.textContent = `Deu ruim! A resposta correta é ${(stNum / ndNum).toFixed(2)}`;
        }
    }
}