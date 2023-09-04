// Business Logic
function firstNLast(sentence) {
    const firstLetter = sentence.charAt(0);
    const lastLetter = sentence.charAt(sentence.length - 1);
    const firstNLast = firstLetter.concat(lastLetter).toUpperCase();
    return firstNLast;
}

function newSentence(sentence) {
    const sentence = prompt("Please enter a sentence");
    const firstAndLast = firstNLast(sentence);
    return firstAndLast;
}

function reverseStr(str) {
    const letter = str.split("").reverse().join("");
    return letter;
}


// User Interface

let reverse = reverseStr(firstAndLast)

console.log(reverse);

