document.getElementById("RUB").addEventListener("click", function() {
    let valorlibra = prompt("Digite o valor desejado para a conversão de libras:");
    
    let libra = 1.00;
    let valorRublo = 108.98;

    alert("£" + valorlibra * libra);
    alert("₽" + valorlibra * valorRublo);
});