// jshint esnext: true
// * **Word.js**: Contains a constructor, Word that depends on the Letter
// constructor.
var Letter = require("./Letter.js");

var Word = function(word) {
    //An array of `new` Letter objects representing the letters of the underlying word
    this.letterObjects = [];
    this.word = word;

    //put those word letters into the this.letterObjects array
    for (var wl = 0; wl < word.length; wl++) {
        var letter = new Letter(word[wl]);
        this.letterObjects.push(letter);
    }

    this.counter = 0;
    
    this.returnAString = function() {

        var returnAString = "";
        for (var i = 0; i < this.letterObjects.length; i++) {
            returnAString += this.letterObjects[i] + " ";
            console.log(returnAString);
        }

    };
    // A function that takes a character as an argument and calls the guess
    //function on each letter object (the second function defined in Letter.js
    this.callCheckItFunctionOnEach = function(character) {
        var correct = false;
        for (var j = 0; j < this.letterObjects.length; j++) {
            if (this.letterObjects[j].checkIt(character) === true) {
                correct = true;
                this.counter++;
            }
        }
        return correct;
    };

};

var words = ["carbon", "hydrogen", "helium", "gallium", "zinc", "argon", "tin",
"potassium", "sodium", "chlorine", "sulfur", "cobalt", "zirconium", "barium",
"lithium", "magnesium", "radium", "palladium", "silver", "lead", "krypton",
"neon", "boron", "silicon", "iron", "chromium", "hydrogen"];

var randomWord = words[Math.floor(words.length * Math.random())];
// console.log(randomWord);

//
// console.log(Word);


var help = new Word("help");
// help.callCheckItFunctionOnEach();
// help.returnAString();
// console.log(help);
help.callCheckItFunctionOnEach("help");



module.exports = Word;
