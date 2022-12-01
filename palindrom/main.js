
function wordPalindrome(word){
    let wordReverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
            wordReverse += word[i];           
    }

    console.log(word, wordReverse);

    //condizione
    if ( word === wordReverse ){
        return true;                     //return interrompe la funzione, quindi non c'è bisogno di mettere else
    } 
    return false;
}

const oneWord = prompt("Inserisci una parola")

if (wordPalindrome(oneWord)){
    alert("La parola è palindroma")
} else {
    alert("La parola NON è palindroma")
}





