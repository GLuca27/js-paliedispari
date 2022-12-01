function getRndIneger(min, max){
    return Math.floor(Math.random() * (max - min + 1) - min)
}

function isEven(result){
    if (result % 2 === 0){
        return true;
    }
    return false;
}

//scelta dell'utente
const userChoice = prompt("Scegli tra Pari e Dispari");
const userNumber = Number( prompt("Inserisci un numero da 1 a 5"));
//generazione numero casuale del computer
const cptNumber = getRndIneger(1, 5);
//somma tra i numeri
const total = userNumber + cptNumber;
console.log(total);
//stabiliamo se è pari o dispari
if ( (userChoice === "pari" && isEven(total)) || (userChoice === "dispari" && !isEven(total)) ){
    console.log("Hai vinto!")
} else {
    console.log("Hai perso!")
}