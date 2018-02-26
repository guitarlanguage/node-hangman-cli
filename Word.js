// jshint esnext: true
// * **Word.js**: Contains a constructor, Word that depends on the Letter
// constructor.
var Letter = require("./Letter.js");

var Word = function(word) {
    //An array of `new` Letter objects representing the letters of the underlying word
    this.theLetters = [];
    // var arr = this.theLetters;
    this.word = word;
    //put those word letters into the this.theLetters array
    for (var i = 0; i < word.length; i++) {
        var letter = new Letter(word[i]);
        this.theLetters.push(letter);
        // console.log(letter)
    }
    //* A function that returns a string representing the word. This should call
    // the function on each letter object (the first function defined in `Letter.js`)
    //that displays the character or an underscore and concatenate those together.
    this.toString = function() {

        var returnAString = '';
        //using forEach loop because Crockford says so
        this.theLetters.forEach(function(item) {
            // console.log(item);
            returnAString += item.produceLetterOrUnderscore() + ' ';
        });
    };

    // A function that takes a character as an argument and calls the guess
    //function on each letter object (the second function defined in Letter.js
    this.callCheckItFunctionOnEach = function(chara) {

        this.theLetters.forEach(function(item) {
            item.checkItAgainstGameLetter(chara);
        });

    };

};

//      testing
// var car = new Word("car");
// // console.log(car);
// // car.callCheckItFunctionOnEach ("a");
// car.toString();


module.exports = Word;
