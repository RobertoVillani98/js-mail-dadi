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
  console.log("Utente trovato");
 } else {
  sentinella = false;
 }
}

if (sentinella) {
 alert("utente trovato: puoi accedere");

 //  ******** gioco dei dadi inserito dopo la verifica della mail
 //  alert("inizio gioco dei dadi");
 //  let user;
 //  let pc;

 //  user = Math.floor(Math.random() * 6) + 1;
 //  console.log("il dato dell'utente ha come risultato: " + user);

 //  pc = Math.floor(Math.random() * 6) + 1;
 //  console.log("il dato del pc ha come risultato: " + pc);

 //  if (user > pc) {
 //   alert("User Win!");
 //   console.log("L'utente ha vinto");
 //  } else if (user < pc) {
 //   alert("Pc win!");
 //   console.log("Il Pc ha vinto");
 //  } else if ((user = pc)) {
 //   alert("Pareggio");
 //   console.log("Pareggio");
 //  }
} else {
 alert("utente non trovato: non puoi accedere");
 console.log("Utente non trovato");
}
