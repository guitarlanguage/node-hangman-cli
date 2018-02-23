// jshint esnext: true
// * **Word.js**: Contains a constructor, Word that depends on the Letter
// constructor.
var Letter = require("./Letter.js");

var Word = function(word) {

    this.word = word;
    //An array of `new` Letter objects representing the letters of the underlying word
    // this.words will hold all of our word objects
    this.letters = [];
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

console.log(Word);
