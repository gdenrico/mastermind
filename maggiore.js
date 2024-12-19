function maggiore() {
  // Preleva i valori dai campi del form e converte i valori in numeri
  let num1 = parseFloat(document.getElementById('fnumero1').value);
  let num2 = parseFloat(document.getElementById('fnumero2').value);
  let num3 = parseFloat(document.getElementById('fnumero3').value);

  // Dichiarazione del massimo e minimo
  let max = num1;  
  let min = num1;
  let maxVoto = "Il primo voto è il maggiore";
  let minVoto = "Il primo voto è il minore";

  // Confronto per il massimo con if, else if e else
  if (num2 > num1 && num2 > num3) {
      max = num2;
      maxVoto = "Il secondo voto è il maggiore";
  } else if (num3 > num1 && num3 > num2) {
      max = num3;
      maxVoto = "Il terzo voto è il maggiore";
  }

  // Confronto per il minimo con if, else if e else
  if (num2 < num1 && num2 < num3) {
      min = num2;
      minVoto = "Il secondo voto è il minore";
  } else if (num3 < num1 && num3 < num2) {
      min = num3;
      minVoto = "Il terzo voto è il minore";
  }

  // Mostra il risultato
  document.getElementById('risultato').innerHTML = maxVoto + ": " + max + "<br>" + minVoto + ": " + min;
}
