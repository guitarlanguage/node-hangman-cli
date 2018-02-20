// jshint esnext: true
// dependency for inquirer npm package
var inquirer = require('inquirer');
var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
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
        if (this.guessed === true) {
            console.log(`character typed: ${this.chara}`);
        } else {
            console.log(`_`);
        }
    };
    //* A function that takes a character as an argument and checks it against
    //the underlying character, updating the stored boolean value to true if it was guessed correctly
    // this.checkIt = function(letter) {
    //     if (this.chara === letter) {
    //         this.guessed = true;
    //     } //else {
    //     //     return;
    //     // }
    // };
    // creates the printInfo method and applies it to all programmer objects
    this.printInfo = function() {
        console.log("letter guessed: " + this.chara);
        console.log("was a letter guessed?: " + this.guessed);
        console.log("---------------");

    };
}


//empty array to meet the criteria of... An array of `new` Letter objects
//representing the letters of the underlying word
var letterArr = [];
// variable we will use to count how many times our questions have been asked
var count = 0;
var askQuestion = function() {

    if (count < 2) {
        // runs inquirer and asks the user a series of questions whose replies are
        // stored within the variable answers inside of the .then statement.
        inquirer.prompt([{
            name: "chara",
            message: "Please guess a letter?"
        }]).then(function(answers) {
            // initializes the variable newguy to be a programmer object which will take
            // in all of the user's answers to the questions above
            var newChara = new Letter(answers.chara, answers.guessed);

            newChara.guessed = true;
            console.log(`${newChara.guessed}`);
            // printInfo method is run to show that the newguy object was successfully created and filled
            newChara.theGuess();
            // pushes newguy object into our array
            letterArr.push(newChara);
            count++;

            console.log(letterArr);
            askQuestion();

        });
    }   else {
        for (var x = 0; x < letterArr.length; x++) {
            letterArr[x].printInfo();
        }
    }
};
askQuestion();

module.exports = Letter;
