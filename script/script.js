const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const scrambleButton = document.getElementById('scramble');
const message = document.getElementById('message');

function getRandomDiceFace() {
    const diceEmoji = ['🎲', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return diceEmoji[Math.floor(Math.random() * 6) + 1];
}

function checkRolls(roll1, roll2) {
    if (roll1 === 6 && roll2 === 6) {
        message.textContent = "🎉 Jackpot! Double Sixes! 🎉";
        message.style.color = "#f7d354";
    } else {
        message.textContent = "Not yet! Try again.";
        message.style.color = "#ff7675";
    }
}

function rollDice() {
    message.textContent = "Rolling the dice...";
    message.style.color = "#cccccc";

    dice1.classList.add('rolling');
    dice2.classList.add('rolling');

    const rollingInterval = setInterval(() => {
        dice1.textContent = getRandomDiceFace();
        dice2.textContent = getRandomDiceFace();
    }, 100);

    setTimeout(() => {
        clearInterval(rollingInterval);
        dice1.classList.remove('rolling');
        dice2.classList.remove('rolling');

        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        const diceEmoji = ['🎲', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        dice1.textContent = diceEmoji[roll1];
        dice2.textContent = diceEmoji[roll2];

        checkRolls(roll1, roll2);
    }, 1500);
}

scrambleButton.addEventListener('click', rollDice);
