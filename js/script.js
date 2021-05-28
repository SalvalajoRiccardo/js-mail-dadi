


var utente = Math.floor(Math.random() * 10);
console.log('utente ' + utente);

var pc = Math.floor(Math.random() * 10);
console.log('pc ' + pc);

var risultato = "Pareggio"
if ( utente < pc) {
    risultato = "Hai Perso"
} else if ( utente > pc) {
    risultato = "Hai Vinto"
}

console.log("risultato: " + risultato);
document.getElementById("dadi").innerHTML = risultato


