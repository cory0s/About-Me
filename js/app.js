alert('We\'re going to play a guessing game!');
alert('Guess answers to the following questions to learn a little more about me!');

var counter = 0;

var birthPlace = prompt('I was born in Seattle, WA (Y/N)');
if(birthPlace.toUpperCase() === 'N' || birthPlace.toUpperCase() === 'NO'){
    console.log('Correct! I was born in Seoul, South Korea.');
    counter++;
} else {
    console.log('Incorrect. I was born in Seoul, South Korea.');
}

var roomMates = prompt('I live with 15 animals (Y/N)');
if(roomMates.toUpperCase() === 'Y' || roomMates.toUpperCase() === 'YES'){
    console.log('Correct! 1 dog, 8 chickens, and 6 humans!');
    counter++;
} else {
    console.log('Wrong. I live in an animal house and I love it');
}

var food = prompt('Pineapple makes everything better. (Y/N)');
if(food.toUpperCase() === 'Y' || food.toUpperCase() === 'YES'){
    console.log('Agreed, how else would you make the perfect pizza, burger, or tacos?');
    counter++;
}else{
    console.log('I don\'t think we can be friends');
}

var invention = prompt('Computers are human\'s greatest invention. (Y/N)');
if(invention.toUpperCase() === 'N' || invention.toUpperCase() === 'NO'){
    console.log('Personally, I think the bicycle is the coolest. Mountain bikes, road bikes, motor bikes...perfectly designed fun')
    counter++;
}else{
    console.log('False. They\'re cool, but I think bicycles are cooler.');
}

var music = prompt('My favorite type of music is rap. (Y/N)');
if(music.toUpperCase() === 'N' || music.toUpperCase() === 'NO'){
    console.log('Correct. I like good old rock and roll.')
    counter++;
}else{
    console.log('Nope. Although I\'m coming around to the rap game.');
}

console.log('You answered ' + counter + ' out of 5 questions correctly!');