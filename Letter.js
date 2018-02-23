// jshint esnext: true
// var alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,
// G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var wrongGuesses = [];
//the Letter Constructor
function Letter(letter, guessed) {
    //A string value to store the underlying character for the letter
    this.letter = letter;
    //A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    //A function that returns the underlying character if the letter has been
    //guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.theGuess = function(character) {
        console.log(this.theGuess);
        //checking whether the guess was a letter or not
        var isLetterRegExp = /^[A-Za-z]+$/;
        if(character.value.match(isLetterRegExp)) {
            //indicates that the input was a letter
            this.guessed = true;
            return this.letter;
            console.log(`Your Guess: ${this.letter[i]}`);
        } else {
            console.log(`_`);
        }
    };
    //* A function that takes a character as an argument and checks it against
    //the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkIt = function(character) {
        if (this.letter === character) {
            this.guessed = true;
            return true;
            console.log(`Correct: ${this.letter}`);
        }   else {
                this.guessed = false;
                console.log(`try a different letter`);
                wrongGuesses.push(character);
                console.log(wrongGuesses);
        }
    };

}



module.exports = Letter;
