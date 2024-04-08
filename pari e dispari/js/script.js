// INPUT

userNumbPod = prompt("pari o dispari (scrivi in minuscolo)");   //inserimento scelta
console.log(userNumbPod);
userNumb = parseInt(prompt("inserisci un numero intero da 1 a 5"));   //inserimento numero
console.log(userNumb, "numero inserito");

const randomNumb = randomNumber();                                    //funzione del numero random del pc

const result = randomNumb + userNumb;
console.log(result, "somma numeri");