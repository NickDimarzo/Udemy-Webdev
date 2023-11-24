// This is a small game that will ask the user to enter in a maximum number
// The game will then pick a random number between 0 and the maximum number
// The game will ask the user the guess which number was generated in the range
// if the user enters a number that is lower than the genertated number the game will respond with: to low
// if the user enters a number that is higher than the genereated number the game will respond with: to high
// once the correct number is guess the game will tell the user how many attempts were made to guess the number

// Set the range for the current game
let maximum = prompt("Enter a maximum number greater than 0");

while(true){

    //checks to see that the maximum is a valid interger and also greater than 0
    if (parseInt(maximum) && parseInt(maximum) > 0){
        break;
    }

    // request another input from the user
    else{
        maximum = prompt("Please enter a valid maximum number!!");
    } 
}

// generates a target number between 0 and the maximum
// note here that it is possible for the target number to be 0 while using Math.floor
const targetNum = Math.floor(Math.random() * maximum);
console.log(targetNum);

// receive intial guess from the user
let guess = prompt("Guess the number!!");
let attempts = 0;

while(true){

    // checks to ensure the guess is a valid interger.
    // also checks to see if the guess is 0. this is neccesary
    // parseInt(0) will return falsy even though it is a valid guess
    if (parseInt(guess) || parseInt(guess) === 0){

        // parsing the guess and maximum again to ensure they are being compared as intergers 
        // and not comparing them in lexicograhpical order
        guess = parseInt(guess);
        maximum = parseInt(maximum);

        // checks to make sure the guess is in the range of the current game
        if (guess < 0 || guess > maximum){
            console.log(guess);
            attempts++;
            guess = prompt(`That number is outside the range!!. Please guess a number between 0 and ${maximum}`);    
        }

        // check to see if the guess is higher than the targetNum
        else if (guess > targetNum){
            console.log(guess);
            attempts++;
            guess = prompt("Too High!!");
        }

        // check to see if the guess is lower than the targetNum
        else if(guess < targetNum){
            console.log(guess);
            attempts++;
            guess = prompt("Too Low!!");
        }

        // Diplays message when the targetNum and Guess are the same
        else{
            console.log(guess);
            attempts++;
            window.alert(`YOU HAVE GUESSED THE CORRECT NUMBER IN: ${attempts} ATTEMPTS`)
            break;
        }
    }

    // request another input from the user
    else{
        attempts++;
        guess = prompt("Please enter a valid number!!");
    }   
}