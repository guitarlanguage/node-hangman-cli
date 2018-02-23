// jshint esnext: true
// dependency for inquirer npm package
var inquirer = require('inquirer');


//empty array to meet the criteria of... An array of `new` Letter objects
//representing the letters of the underlying word
var letterArr = [];
// variable we will use to count how many times our questions have been asked
var count = 0;
var askQuestion = function() {







        }]).then(function(answers) {
            // initializes the variable newguy to be a programmer object which will take
            // in all of the user's answers to the questions above
            var newChara = new Letter(answers.letter);
            // pushes newguy object into our array
            letterArr.push(newChara);
            count++;
            // newChara.guessed = true;
            console.log(`${newChara.letter}`);

            console.log(letterArr);
            askQuestion();

        });
    }   else {
        for (var x = 0; x < letterArr.length; x++) {
            letterArr[x].printInfo();
        }
    }
};
