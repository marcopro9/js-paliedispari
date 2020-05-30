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

// /* SECONDO ESERCIZIO
  // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
    var pariDispari = prompt("scegli pari o dispari");
    var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
    console.log("questo è il numero scelto dall\'utente: " + numeroUtente);

  // funzione per far scegliere un numero casuale al Computer
    function numeroComputer() {
      var numeroCasuale = Math.floor(Math.random() * 5) + 1;
      return numeroCasuale;
    }
    var numeroPc = numeroComputer();
    console.log("questo è il numero del Computer: " + numeroPc);

  // Sommo il numero Utente con quello del numeroComputer
    var totale = numeroUtente + numeroPc;
    console.log("questo è il totale: " + totale);

  // controllo se la somma dei due numeri è pari o dispari
    function risultatoPariDispari(){
      if (totale % 2 == 0) {
          risultato = "pari";
      } else {
          risultato = "dispari";
        }
      return risultato;
    }
    var risultato = risultatoPariDispari();
    
  // Risultato
    var messaggioUtente;
    if (pariDispari == risultato) {
      messaggioUtente = "L\'utente ha vinto";
    } else {
      messaggioUtente = "L\'utente ha perso";
    }
    console.log(messaggioUtente);

// */
