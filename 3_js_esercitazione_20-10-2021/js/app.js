let str = prompt("Inserisci 5 nomi separati da una virgola", 'Stefania,Sandro,Maria,Giacomo,Giorgia');
let arrAge = [32, 21, 47, 12, 78];

// utilizzo split per creare un array da una striga e inserisco la virgola come saparatore
let names = str.split (',');

// modifico l'array aggiungendo gli elementi alla fine dell'array
names.push ('Franco', 'Valentina');

//con .splice elimino l'oggetto in posizione 3 e aggiungo il nuovo oggetto, l'array che ottego con .splice contiene solo gli elementi eliminati (in questo caso "Giacomo"), 
//utilizzo unshift per aggiungere l'oggetto 0 dell'array creato con splice.
names.unshift(names.splice(3, 1, "Marta")[0]);

arrAge.push (54, 32);
arrAge.unshift(arrAge.splice(3,1,6)[0]);


// creo array multidimensionale 
let newArr = [names, arrAge];

console.log (newArr);

/* in questo modo visualizzo l'array multidimensionale in console senza crearlo 
console.log ([names, arrAge]) */
