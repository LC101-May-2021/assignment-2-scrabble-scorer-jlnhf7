// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
let simpleScore = function (word) {

	return word.length;
 }
	

let vowelBonusScore = function (word) {
	word = word.toUpperCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelBonusStructure) {
 
		 if (vowelBonusStructure[pointValue].includes(word[i])) {	
			letterPoints += Number(pointValue);
		 }
    
	  }
	}
	return letterPoints;
}


const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
// remember you need commas between your keys JEN
const vowelBonusStructure = {
	1: ['Q', 'Z', 'J', 'X', 'K', 'F', 'H', 'V', 'W', 'Y', 'B', 'C', 'M', 'P', 'D', 'G', 'L', 'N', 'R', 'S', 'T'],
	3: ['A', 'E', 'I', 'O', 'U']
};

const scoringAlgorithms = [
	{name: "Simple Score", 
	description:  "Each letter is worth 1 point", 
	scoringFunction: simpleScore},
	{name: "Bonus Vowels",
	description: "Vowels are 3 pts, consonants are 1 pt.", 
	scoringFunction: vowelBonusScore},
	{name: "Scrabble Score",
	description: "The traditional scoring algorithm.",
	scoringFunction: scrabbleScore}];

function runProgram() {
// this is where you will put your main function request for the user to pick 	
	let word = initialPrompt();
	let finalScoreAlgorithm = scorerPrompt();
	let newPointStructure = transform(oldPointStructure);
	let finalScore = finalScoreAlgorithm.scoringFunction(word);
	console.log(`Score for '${word}': '${finalScore}'`);

	//not sure if I am supposed to move this up here?
};

function initialPrompt() {
   let greeting = (input.question(`Let's play some scrabble! \n\nEnter a word to score: `));
   return greeting;
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += Number(pointValue);

		 }
    
	  }
	}
	return letterPoints;

 };



// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //







//this format is to make it annonymous - due to autograder 

//going to use dot function to store the object - you get it from the user, pull it from an array and save it in a variable, then you can call - just need dot notation
function scrabbleScore(word) {
	word = word.toLowerCase();
	let letterPoints = 0;
	for(let i=0; i < word.length; i++){
		letterPoints += Number(newPointStructure[word[i]]);
	}
					return letterPoints;
};



//remember to add the specifcis in the input question 
// question for TA should I use console log scoring Algorithms dot description (this does not include the numbres like it does in the example right before C) or should I just console log it exactly - I have added both
function scorerPrompt() {
   console.log(`Which scoring alogrithm would you like to use? `);
		for (let i = 0; i < scoringAlgorithms.length; i++){
			console.log(`${i} - ${scoringAlgorithms[i].description}`);
			}
				let scoreChoice = input.question("Enter 0, 1, or 2:");
				return scoringAlgorithms[scoreChoice];
}

function transform(perameterPoints) {
	//turning it into an object 
	//wondering if I need to create an new variable for this section and put it as a permameter or if I don't need a perameter on this one 
let transformedObject = {};

	for (score in perameterPoints) {
		let letters = perameterPoints[score];
		for(let i=0; i < letters.length;i++) {
			let letter = letters[i].toLowerCase();
			transformedObject[letter] = Number(score)

		}

	}
				return transformedObject;

};

let newPointStructure = transform(oldPointStructure);

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

