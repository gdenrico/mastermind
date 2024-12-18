function sommaNumeri() {
    // Preleva i valori dai campi del form
    var num1 = document.getElementById('fnumero1').value;
    var num2 = document.getElementById('fnumero2').value;
    var num3 = document.getElementById('fnumero3').value;
    var num4 = document.getElementById('fnumero4').value;

    // Converte i valori in numeri
    var numero1 = parseFloat(num1); 
    var numero2 = parseFloat(num2); 
    var numero3 = parseFloat(num3);
    var numero4 = parseFloat(num4);

    // Calcola la somma
    var somma = numero1 + numero2 + numero3 + numero4;

    // Mostra il risultato nella pagina
    document.getElementById('risultato').innerHTML = 'La somma è: ' + somma;
}
