const calcular = document.getElementById('calcular');


function IMC(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome!=='' && peso!=='' && altura!==''){
        const valor = (peso / (altura*altura)).toFixed(1);
        let classificacao= '';
        console.log(valor);
        if(valor < 18.5){
            classificacao = 'abaixo do peso';
        }
        else if(valor < 25){
            classificacao = 'com peso ideal';
        }
        else if(valor < 30){
            classificacao = 'levemente acima do peso';
        }
        else if(valor < 35){
            classificacao = 'com obesidade grau I';
        }
        else if(valor < 40){
            classificacao = 'com obesidade grau II';
        }
        else{
            classificacao = 'com obesidade grau III';
        }
        resultado.textContent = `${nome} seu IMC é ${valor} e vc esta ${classificacao}`;
    }else{
        resultado.textContent ='Preencha todos os campos';
    }
}

calcular.addEventListener('click', IMC);                   