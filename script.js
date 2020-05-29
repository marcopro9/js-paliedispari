/* PRIMO ESERCIZIO
// variabili
 // creo la variabile per chiedere una parola
  var parola = prompt('scrivi una parola e ti dirò se è un palindromo');

// inizio la funzione con ciclo che scopre se la parola è un palindromo, con ritorno di convalida
  function Palindromo (parola, bool) {
    var convalida = true;
    for (var i = 0; i < (parola.length); i++) {
      if (parola[i] != parola[parola.length - i -1]) {
        convalida = false;
      }
    }
      return convalida;
  }

// scrivo una variabile per stampare poi il risultato della funzione
  var controllo = Palindromo(parola, controllo);

// scrivo la condizione booleana per stampare il tipo di risultato
  if (controllo == false) {
    console.log( parola +' non è un palindromo');
  } else {
      console.log( parola +' è un palindromo');
    }
*/

/* SECONDO ESERCIZIO


*/
