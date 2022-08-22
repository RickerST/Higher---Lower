
let N = parseInt(prompt("provide a max number"));

document.getElementById("heading").innerHTML = "Guess a number between 1 and " + N;

let num = Math.floor(Math.random() * N) + 1;

console.log(num);

var i = 0

let attempts = []



function do_guess() {
    let guess = document.getElementById("guess").value;
    let message = document.getElementById("message");
    if(attempts.includes(guess)){
        message.innerText = "You guessed that already, try again";}
   
  
    else if (guess < 1 || guess > N) {
        message.innerHTML = "That number is not in range, try again.";
    } 

  else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        attempts.push(guess);
        i += 1;
    } 

    else if (guess < num) {
        message.innerHTML = "No, try a higher number.";
        attempts.push(guess);
        i += 1;
    } 

  else if (isNaN(guess)) {
        message.innerHTML = "That is not a number!";
    } 

  
    else {
        attempts.push(guess);
        message.innerHTML = "You got it!";
        i += 1;
        message.innerHTML += "It took you " + i + " tries and your guesses were " + attempts.join(", ");
    }
}