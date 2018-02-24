// jshint esnext: true

var wrongGuesses = [];
//the Letter Constructor
function Letter(letter) {
    //A string value to store the underlying character for the letter
    this.letter = letter;
    //A boolean value that stores whether that letter has been guessed yet
    this.accurateGuess = false;

    this.toString = function(letter) {
        // if (alphabetLetters.indexOf(letter) > -1) {
        if(this.accurateGuess === true) {
            return this.letter;

        } else {
            console.log(`_`);
        }
    };
    //A function that takes a character as an argument and checks it against the
    //underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkIt = function(character) {
        if (this.letter === character) {
            this.accurateGuess = true;
            return;

        }   else {
                wrongGuesses.push(character);
                console.log(wrongGuesses);
        }
    };
}
// testing
// var j = new Letter("j");
// console.log(j);
// j.checkIt("j");
//
//
// console.log(`__________`);
// j.toString("j");
// console.log(j);


//
// var l = new Letter(l);
// l.checkIt("l");
// l.toString();

//export the module
module.exports = Letter;
