import { transcript } from "./jsassess";

var score = 0;
var result = score + " / 10";

const assessWords = [
    "above", "thorn", "sapphire", "mother", "phone booth", "ciphers under"
    , "fun three phones", "laughter", "rummage", "bath rug"
]

if (assessWords.includes(transcript)) {
    score++
}

document.getElementById('score').textContent =  result;