// * **Word.js**: Contains a constructor, Word that depends on the Letter
// constructor.
var Letter = require("./Letter.js");
//This is used to create an object representing the current
// word the user is attempting to guess. That means the constructor should
// define:
//An array of `new` Letter objects representing the letters of the underlying word
// * A function that returns a string representing the word.This should call the
// function on each letter object (the first function defined in `Letter.js`)
// that displays the character or an underscore and concatenate those together.
//
// * A function that takes a character as an argument and calls the guess
// function on each letter object (the second function defined in `Letter.js`)
// creating Constructor, Word
var Word = function(word) {

    this.word = word;
    //An array of `new` Letter objects representing the letters of the underlying word
    // this.words will hold all of our word objects
    this.letters = [];
    this.addLetters= function(chara, guessed) {
      this.theGuess.push(new Letter());
    };

// * A function that takes a character as an argument and calls the guess
// function on each letter object (the second function defined in `Letter.js`)
    this.chug = function(letter) {
        this.checkIt;
    };


};

console.log(Word);
