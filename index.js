// jshint esnext: true
var inquirer = require("inquirer");
var Word = require("./Word.js");
var Prompt = require("prompt");
var periodicWords = require("./periodicWords.js");

var randomWord = periodicWords[Math.floor(periodicWords.length * Math.random())];


var gameWord = new Word(randomWord);

console.log(gameWord);
