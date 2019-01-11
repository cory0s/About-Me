'use strict';
alert('We\'re going to play a guessing game!');
alert('Guess answers to the following questions to learn a little more about me!');

var counter = 0;

//QUESTION 1
function questionUno(){
    var birthPlace = prompt('I was born in Seattle, WA (Y/N)');
    
    if(birthPlace.toUpperCase() === 'N' || birthPlace.toUpperCase() === 'NO'){
        alert('Correct! I was born in Seoul, South Korea.');
        counter++;
    } else {
        alert('Incorrect. I was born in Seoul, South Korea.');
    }
    console.log('Answer1: ', birthPlace);
}
questionUno();


//QUESTION 2
function questionDos(){
    var roomMates = prompt('I live with 15 animals (Y/N)');
    if(roomMates.toUpperCase() === 'Y' || roomMates.toUpperCase() === 'YES'){
        alert('Correct! 1 dog, 8 chickens, and 6 humans!');
        counter++;
    } else {
        alert('Wrong. I live in an animal house and I love it');
    }
    console.log('Answer2: ', roomMates);
}
questionDos();


//QUESTION 3
function questionTres(){
    var food = prompt('Pineapple makes everything better. (Y/N)');
    if(food.toUpperCase() === 'Y' || food.toUpperCase() === 'YES'){
        alert('Agreed, how else would you make the perfect pizza, burger, or tacos?');
        counter++;
    }else{
        alert('Wrong. I don\'t think we can be friends');
    }
    console.log('Answer3: ', food);
}
questionTres();


//QUESTION 4
function questionCuatro(){
    var invention = prompt('Computers are human\'s greatest invention. (Y/N)');
    if(invention.toUpperCase() === 'N' || invention.toUpperCase() === 'NO'){
        alert('Personally, I think the bicycle is the coolest. Mountain bikes, road bikes, motor bikes...perfectly designed fun');
        counter++;
    }else{
        alert('False. They\'re cool, but I think bicycles are cooler.');
    }
    console.log('Answer4: ', invention);
}
questionCuatro();


//QUESTION 5
function questionCinco(){
    var music = prompt('My favorite type of music is rap. (Y/N)');
    if(music.toUpperCase() === 'N' || music.toUpperCase() === 'NO'){
        alert('Correct. I like good old rock and roll.');
        counter++;
    }else{
        alert('Nope. Although I\'m coming around to the rap game.');
    }
    console.log('Answer5: ', music);
    console.log('You answered ' + counter + ' out of 5 questions correctly!');
}
questionCinco();

//QUESTION 6 - Guess a number with only 4 chances

var guessCounter = 0;
var answer = 12;

for(var i=0; i<4; i++){
    guessCounter++;
    var remainingGuesses = 4-guessCounter;
    var guessNumber = prompt('Guess how many years I\'ve lived in Seattle');

    if(parseInt(guessNumber) === answer && guessCounter === 1){
        alert('Congrats! You answered correctly on your first try!');
        break;
    }else if(parseInt(guessNumber) === answer){
        alert('Correct! You guessed correctly in ' + guessCounter + ' guesses!');
        break;
    }else if(parseInt(guessNumber) > answer){
        alert('Your guess was too high. You have ' + remainingGuesses + ' guesses left.');
    }else if(parseInt(guessNumber) < answer && remainingGuesses === 0){ 
        alert('Your guess was too low.  You have no remaining guesses. The correct answer was ' + answer +'.');
    }else{
        alert('Your guess was too low. You have ' + remainingGuesses + ' guesses left.');
    }
}


//QUESTION 7 - Guess a correct answer from an array of correct answers within 6 tries

var placesLived = ['tuscon', 'paris', 'madrid', 'seoul', 'richland'];
var guessCounter = 0;
var continueGuessing = true;
var incorrectGuess = false;

for(var i=0; i<6; i++){
    guessCounter++;
    var remainingGuesses = 6-guessCounter;

    if(remainingGuesses > 0 && continueGuessing === true){
        if(incorrectGuess === true){
            alert('Nope, I haven\'t lived there. You have ' + remainingGuesses + ' guesses left.');
        }

        var guessCity = prompt('Guess one city I\'ve lived in other than Seattle');
        for(var j=0; j < placesLived.length; j++){
            if(placesLived[j] === guessCity.toLowerCase()){
                alert('Correct! You guessed correctly in ' + guessCounter + ' guesses!');
                var continueGuessing = false;
            }
        }
        incorrectGuess = true;
    }

    if(remainingGuesses === 0){
        alert('You\'re out of guesses! Correct answers were: ' + placesLived);
    }
}     