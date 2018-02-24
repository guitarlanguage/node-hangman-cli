// jshint esnext: true
// * **Word.js**: Contains a constructor, Word that depends on the Letter
// constructor.
var Letter = require("./Letter.js");

var Word = function(word) {
    //An array of `new` Letter objects representing the letters of the underlying word
    this.letters = [];
    this.word = word;

    //put those word letters into the this.letters array
    for (var w = 0; w < letters.length; w++) {
        var letter = new Letter(word[w]);
        this.letters.push(letter);
    }

//A function that returns a string representing the word. This should call the
// function on each letter object (the first function defined in `Letter.js`)that
// displays the character or an underscore and concatenate those together.
    this.returnAString = function() {
    //A function that returns a string representing the word.
    var theWord = "";
    this.checkIt();
    };


};

var words = ["carbon", "hydrogen", "helium", "gallium", "zinc", "argon", "tin",
"potassium", "sodium", "chlorine", "sulfur", "cobalt", "zirconium", "barium",
"lithium", "magnesium", "radium", "palladium", "silver", "lead", "krypton",
"neon", "boron", "silicon", "iron", "chromium", "hydrogen"];

console.log(this.letters);

console.log(Word);

module.exports = Word;
