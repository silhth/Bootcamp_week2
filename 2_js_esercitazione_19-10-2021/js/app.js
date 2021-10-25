let animal = prompt(`Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda`);


// utilizzando if else if
/*if (animal === `1`) {

    console.log (`Chose the Dog`);
} else if (animal === `2`) {

    console.log (`Chose the Cat`);
} else if (animal === `3`) {

    console.log (`Chose the Goldfish`);
} else if (animal === `4`) {

    console.log (`Chose the Monkey`);
} else if (animal === `5`) {

    console.log (`Chose the Panda`);
} else if (animal > 5) {

    console.log (`Animal not found`);
} */

// utilizzando switch

/*switch (animal) {
    case `1`:
        console.log (`Chose the Dog`);
        break;

    case `2`:
        console.log (`Chose the Cat`);
        break;

    case `3`:
        console.log (`Chose the Goldfish`);
        break;

    case `4`:
        console.log (`Chose the Monkey`);
        break;

    case `5`:
        console.log (`Chose the Panda`);
        break;

    default:
         console.log (`Animal not found`);
         break;

} */

// utilizzando l'operatore ternario

let chose_animal = animal == 1 ? `Chose the Dog` 
                : animal == 2 ? `Chose the Cat`
                : animal == 3 ? `Chose the Goldfish`
                : animal == 4 ? `Chose the Monkey`
                : animal == 5 ? `Chose the Panda`
                :`Animal not found`;

console.log ( chose_animal );