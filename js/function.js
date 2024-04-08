
function wordCheck(wordToCheck) {
    const wordReversed = word.split("").reverse().join("");   //rigira la parola
    console.log(wordReversed);
    let result = "la parola è palindroma";
    if (word === wordReversed) {
        result = "la parola non è palindorma";
    } 
    console.log(result);
    return result;
} 