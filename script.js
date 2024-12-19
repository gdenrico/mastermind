function sommaNumeri() {
    // Preleva i valori dai campi del form
    let num1 = document.getElementById('fnumero1').value;
    let num2 = document.getElementById('fnumero2').value;
    let num3 = document.getElementById('fnumero3').value;
    let num4 = document.getElementById('fnumero4').value;

    // Converte i valori in numeri
    let numero1 = parseFloat(num1); 
    let numero2 = parseFloat(num2); 
    let numero3 = parseFloat(num3);
    let numero4 = parseFloat(num4);

    // Calcola la somma
    let somma = numero1 + numero2 + numero3 + numero4;

    // Mostra il risultato nella pagina
    document.getElementById('risultato').innerHTML = 'La somma è: ' + somma;
}
