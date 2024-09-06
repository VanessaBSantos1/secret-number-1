alert("Hya! Welcome to my secret number game!");

let limit = 100; 
let secret_number = parseInt(Math.random()*limit + 1); //numero secreto
let guess; //variavel de chute
let guess_count = 1; //contagem de chute

while (secret_number != guess){  //loop de tentativas
    guess = prompt(`Type a number between 0 and ${limit}:`);
    
    if (secret_number == guess) { //condição se acertar
        let word_attempts = guess_count > 1 ? 'attempts' : 'attempt'; //substituto para if else
        alert(`Well done, you win in ${guess} ${word_attempts} S2!`);
    } else { //condição se errar - dicas de chute
        alert("Tray again :(");
        if(secret_number < guess){
            alert(`The secret number is less than your guees ${guess}`);
        } else {
            alert(`The secret number is greater than your guees ${guess}`);
        }
        guess_count++;
    }
}