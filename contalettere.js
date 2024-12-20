function confrontalunghezza () {
 let stringa1 = document.getElementByid("fnome").value;
 let stringa2 = document.getElementByid("fnomeb").value;

 let lunghezza1= stringa1.lenght;
 let lunghezza2= stringa2.lenght;
 let risultato;
 if (lunghezza1 > lunghezza2){
     risultato= "la prima stringa è più lunga" + stringa1.lenght;
     

 } else if (lunghezza2 > lunghezza1) {
    risultato= "la seconda stringa è più lunga" + stringa2.lenght;

 }
  else {
     risultato= "le due stringhe si equivalgono"
  }
  document.getElementById("risultato").innerText = risultato;
  }
