// dependency for inquirer npm package
var inquirer = require('inquirer');

//**Letter.js**: Contains a constructor, Letter. This constructor should be
//able to either display an underlying character or a blank placeholder (such
//as an underscore), depending
//on whether or not the user has guessed the letter. That means the constructor should define:
function Letter(chara, guessed) {
    //A string value to store the underlying character for the letter
    this.chara = chara;
    //A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    //A function that returns the underlying character if the letter has been
    //guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.theGuess = function() {
        if(this.guessed === true) {
            console.log(`character typed: ${this.chara}`);
        }
    }

};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "chara",
    message: "Would you please guess a letter?"
  }
]).then(function(answers) {
  // initializes the variable newguy to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newChara = new Letter(answers.chara, true);
  newChara.guessed = true;
  // printInfo method is run to show that the newguy object was successfully created and filled
  newChara.theGuess();
});

module.exports = Letter;
