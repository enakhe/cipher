// Business Logic
function firstNLast(sentence) {
    const firstLetter = sentence.charAt(0);
    const lastLetter = sentence.charAt(sentence.length - 1);
    const firstNLast = firstLetter.concat(lastLetter).toUpperCase();
    return firstNLast;
}

function reverseStr(str) {
    const letter = str.split("").reverse().join("");
    return letter;
}

function newSentence(sentence) {
    const firstAndLast = firstNLast(sentence);
    const reverse = reverseStr(firstAndLast);
    const newSentence = sentence.concat(reverse)
    return newSentence;
}

// User Interface
const sentence = prompt("Please enter a sentence");
console.log(newSentence(sentence));

