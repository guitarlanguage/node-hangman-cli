// jshint esnext: true

// var wrongGuesses = [];
//the Letter Constructor
var Letter = function (letter) {
    //A string value to store the underlying character for the letter
    this.letter = letter;
    //A boolean value that stores whether that letter has been guessed yet
    this.accurateGuess = false;
    //if the letter has been guessed
    this.produceLetterOrUnderscore = function() {

        if (this.accurateGuess === true) {
            // console.log(letter);
            return letter;


        } else {
            console.log(`_`);
        }
    };
    //A function that takes a character as an argument and checks it against the
    //underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkItAgainstGameLetter = function(character) {
        if (character === this.letter) {
            this.accurateGuess = true;
            return this.accurateGuess;

        } else {
            return;
            // console.log(wrongGuesses);
        }
    };
}

// var j = new Letter('j');
// j.checkItAgainstGameLetter('j');
// console.log(j.produceLetterOrUnderscore());
//
//
// console.log(`---------`);


// console.log(j);


//export the module
module.exports = Letter;
