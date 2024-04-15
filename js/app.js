function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = Number(document.getElementById('qtd').value);
    if (tipoDeIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (tipoDeIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}
function comprarPista(quantidade) {
    let quantidadePista = Number(document.getElementById('qtd-pista').textContent);
    if (quantidade > quantidadePista) {
        alert('Quantidade indisponível para tipo pista!');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarSuperior(quantidade) {
    let quantidadeSuperior = Number(document.getElementById('qtd-superior').textContent);
    if (quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível para tipo superior!');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!');
    }
}
function comprarInferior(quantidade) {
    let comprarInferior = Number(document.getElementById('qtd-inferior').textContent);
    if (quantidade > comprarInferior) {
        alert('Quantidade indisponível para tipo inferior!');
    } else {
        comprarInferior = comprarInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = comprarInferior;
        alert('Compra realizada com sucesso!');
    }
}