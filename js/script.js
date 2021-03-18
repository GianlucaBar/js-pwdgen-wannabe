// dati 

var nomeUtente = prompt( 'Scrivi il tuo Nome');

var cognomeUtente = prompt( 'Scrivi il tuo Cognome');

var colorePreferitoUtente = prompt( 'Scrivi il tuo colore preferito');

var annoCorrente = '21';

// logica 

var password = nomeUtente + cognomeUtente + colorePreferitoUtente + annoCorrente;

// console check 

// console.log(password)

// output 
document.getElementById('passwordOutput').innerHTML = password;
