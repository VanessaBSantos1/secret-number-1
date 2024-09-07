alert("Hya! Welcome to my secret number game!");

let limit = 100; 
let secret_number = parseInt(Math.random()*limit + 1); //numero secreto
let guess; //variavel de chute
let guess_count = 1; //contagem de chute

while (secret_number != guess){  //loop de tentativas
    guess = prompt(`Type a number between 1 and ${limit}:`);

    if (isNaN(guess) || guess < 1 || guess > limit) { //verifica se o que foi digitado é um numero e se esta dentro do intervalo de 1 a 100
        alert(`Plase type a valid number between 1 and ${limit}`);
    } else {
        if (secret_number == guess) { //condição se acertar
            let word_attempts = guess_count > 1 ? 'attempts' : 'attempt'; //substituto para if else
            alert(`Well done, you win in ${guess_count} ${word_attempts} S2!`);
        } else { //condição se errar - dicas de chute
            alert("Tray again :(");
            if(secret_number < guess){
                alert(`The secret number is less than your guees ${guess} ;)`);
            } else {
                alert(`The secret number is greater than your guees ${guess} ;)`);
            }
            guess_count++;
        }
    }
}