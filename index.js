// jshint esnext: true
var inquirer = require('inquirer');
var Word = require("./Word.js");


//empty array to meet the criteria of... An array of `new` Letter objects
//representing the letters of the underlying word
var lettersArr = [];
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

            var gamersGuess = answer.chara.toLowerCase().trim();
            lettersArr.push(gamersGuess);
            console.log(lettersArr);
            count++;


            console.log(letterArr);
            askQuestion();

        });
    } else {
        for (var x = 0; x < letterArr.length; x++) {
            letterArr[x].printInfo();
        }
    }

};
