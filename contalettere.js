function confrontalunghezza () {
   // Usa getElementById con "I" maiuscola
   let stringa1 = document.getElementById("fnome").value;
   let stringa2 = document.getElementById("fnomeb").value;

   // Correggi "lenght" in "length"
   let lunghezza1 = stringa1.length;
   let lunghezza2 = stringa2.length;
   let risultato;

   // Confronta la lunghezza delle stringhe e costruisci il messaggio
   if (lunghezza1 > lunghezza2) {
       risultato = "La prima stringa è più lunga di " + lunghezza1 + " caratteri.";
   } else if (lunghezza2 > lunghezza1) {
       risultato = "La seconda stringa è più lunga di " + lunghezza2 + " caratteri.";
   } else {
       risultato = "Le due stringhe hanno la stessa lunghezza.";
   }

   // Usa getElementById per visualizzare il risultato
   document.getElementById("risultato").innerText = risultato;
}
