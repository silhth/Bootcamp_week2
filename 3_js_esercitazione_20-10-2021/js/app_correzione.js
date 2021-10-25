// creo l'array
let animals = [`dog`, `cat`, `goldfish`, `monkey`, `panda`];

// utilizzando -1 prompt diventa automaticamente un valore numerico e alla risposrta data dall'utente sottraggo 1 perchè la numerazioni degli oggetti nell'arrey parte da 0
let input = prompt(`Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda`)-1;

// visualizzo la console se l'utente utilizza un valure true e un alert se il valore è false
console.log (input in animals ? `chose the ${animals [input]}` : alert("perchè non hai effetuato una scelta?") );


// utilizzado if else e creado due alert nel caso in cui "input in alimals= true" o "input in analams= false"
// if (input in animals) {
//      alert (`chose the ${animals [input]}`)

//  } else {
//      alert ("perchè non hai effetuato una scelta")
//  }