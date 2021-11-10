const mailUtente = prompt("Inserisci la tua mail");
console.log(mailUtente);

const mail = [
 "rob@gmail.com",
 "gian@gmail.com",
 "ale@gmail.com",
 "gio@gmail.com",
];

let sentinella = false;

for (let i = 0; i < mailUtente.length && sentinella == false; i++) {
 if (mail[i] == mailUtente) {
  sentinella = true;
 } else {
  sentinella = false;
 }
}

if (sentinella) {
 alert("utente trovato: puoi accedere");
} else {
 alert("utente non trovato: non puoi accedere");
}
