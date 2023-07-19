let sum = 0
let hasBlackJack = false
let isAlive= true
let message= " "
let cards = []
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl =document.getElementById("cards-el")

// let player = {
//     name : "User" , chips : 400
// }
// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + " : $" + player.chips + "  won!!!"; 

function getRendomCard(){
    let number = Math.floor(Math.random() * 13) + 1;
    return number;

    if(number > 10)
    {
        return 10;
    }
    else if (number === 1)
    {
        return 11;
    }
    else{
        return number;
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRendomCard()
    let secondCard = getRendomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();

}

function renderGame(){
    cardsEl.textContent = "Cards : "
    for( let i = 0 ; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl. textContent = "Sum :" + sum;
    if (sum <=20){
        message="Do you want to draw a new card?"
   }
   else if(sum === 21){
       message="Wohoo! You've got Blackjack!"
       hasBlackJack = true
   }
   else{
       message= "You're out of the game!"
       isAlive = false
   }
   messageEl.textContent = message;
}

function newCard(){
    if( isAlive === true && hasBlackJack === false){
        let againCard = getRendomCard();
        sum += againCard;
        cards.push(againCard);
        renderGame();
    }
}
