let attempt;
let maxAttempt = 3;
let minAttempt = 1;
let maxPrize = 100;
let coefficient = {
    1: 1,
    2: 2,
    3: 4
};
let Continue;
let doublePrize = 2;
let maxNumber = 8;
let totalPrize = 0;
let increasingNumber = 4;
let start = confirm('Do you want to play a game?');
if (!start){
    alert('You did not become a billionaire, but can.');
}
while (start) {
    for (attempt = minAttempt; attempt <= maxAttempt;){
        let trueNumber = Math.floor(Math.random()*(maxNumber+1));
        let inputNumber = prompt(`Choose a roulette pocket number from 0 to ${maxNumber}
        Attempts left:  ${maxAttempt+minAttempt-attempt} 
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${maxPrize / coefficient[attempt]}$`, '');
        if(Number(inputNumber) === trueNumber){
            totalPrize = totalPrize + maxPrize/coefficient[attempt];
            Continue = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
            if (Continue) {
                attempt = minAttempt;
                maxPrize = maxPrize * doublePrize;
                maxNumber = maxNumber + increasingNumber;
            } else if(!Continue){
                attempt = maxAttempt+minAttempt;
            } 
} else{
                attempt++;
            }
        }
        start = confirm(`Thank you for your participation. Your prize is: ${totalPrize}$. Do you want to play again?`);
}
