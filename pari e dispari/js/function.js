function randomNumber() {
    const randomNumb = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumb, "numero casuale");
    return randomNumb;
}

function PoDFunc (PodNumb) {
    let Podtext = "";
    if (PodNumb % 2 === 0) {
        Podtext = "pari";
    } else {
        Podtext = "dispari"
    }
    console.log("il numero è", Podtext);
    return Podtext;
}