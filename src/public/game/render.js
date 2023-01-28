const cardImages = [
    {
        index: 0,
        img: `card-bag.png`,
        name: `Plastic Bag`,
        lifeSpan: `High`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Low`,
        score: 5
    },
    {
        index: 1,
        img: `card-bread.png`,
        name: `Bread`,
        lifeSpan: `Medium`,
        carbonEmissions: `Low`,
        ecoFriendly: `Medium`,
        price: `Medium`,
        score: 9
    },
    {
        index: 2,
        img: `card-burger.png`,
        name: `Burger`,
        lifeSpan: `Low`,
        carbonEmissions: `Low`,
        ecoFriendly: `Medium`,
        price: `Medium`,
        score: 8
    },
    {
        index: 3,
        img: `card-can.png`,
        name: `Aluminum Can`,
        lifeSpan: `High`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Medium`,
        score: 7
    },
    {
        index: 4,
        img: `card-cheese.png`,
        name: `Cheese`,
        lifeSpan: `High`,
        carbonEmissions: `Low`,
        ecoFriendly: `Medium`,
        price: `Medium`,
        score: 9
    },
    {
        index: 5,
        img: `card-cotton.png`,
        name: `Cotton`,
        lifeSpan: `Medium`,
        carbonEmissions: `Medium`,
        ecoFriendly: `Low`,
        price: `Medium`,
        score: 5
    },
    {
        index: 6,
        img: `card-donut.png`,
        name: `Donut`,
        lifeSpan: `Low`,
        carbonEmissions: `Medium`,
        ecoFriendly: `Medium`,
        price: `Medium`,
        score: 7
    },
    {
        index: 7,
        img: `card-flour.png`,
        name: `Flour`,
        lifeSpan: `High`,
        carbonEmissions: `Low`,
        ecoFriendly: `Medium`,
        price: `Low`,
        score: 8
    },
    {
        index: 8,
        img: `card-honey.png`,
        name: `Honey`,
        lifeSpan: `Medium`,
        carbonEmissions: `Low`,
        ecoFriendly: `High`,
        price: `High`,
        score: 7
    },
    {
        index: 9,
        img: `card-icecream.png`,
        name: `Ice Cream`,
        lifeSpan: `Low`,
        carbonEmissions: `Low`,
        ecoFriendly: `Medium`,
        price: `Medium`,
        score: 5
    },
    {
        index: 10,
        img: `card-mango.png`,
        name: `Mango`,
        lifeSpan: `Medium`,
        carbonEmissions: `Low`,
        ecoFriendly: `Medium`,
        price: `Low`,
        score: 7
    },
    {
        index: 11,
        img: `card-milk.png`,
        name: `Milk`,
        lifeSpan: `Low`,
        carbonEmissions: `Low`,
        ecoFriendly: `Medium`,
        price: `Low`,
        score: 7
    },
    {
        index: 12,
        img: `card-onion.png`,
        name: `Onion`,
        lifeSpan: `Medium`,
        carbonEmissions: `Low`,
        ecoFriendly: `Medium`,
        price: `Low`,
        score: 8
    },
    {
        index: 13,
        img: `card-sandwich.png`,
        name: `Sandwich`,
        lifeSpan: `Medium`,
        carbonEmissions: `Low`,
        ecoFriendly: `Low`,
        price: `Medium`,
        score: 7
    },
    {
        index: 14,
        img: `card-paperbag.png`,
        name: `Paper Bag`,
        lifeSpan: `Medium`,
        carbonEmissions: `Low`,
        ecoFriendly: `Medium`,
        price: `Medium`,
        score: 6
    },
    {
        index: 15,
        img: `card-basket.png`,
        name: `Plastic Basket`,
        lifeSpan: `High`,
        carbonEmissions: `Medium`,
        ecoFriendly: `Low`,
        price: `Medium`,
        score: 5
    },
]

const popup = document.querySelector(`.popup`);
const popupTitle = document.querySelector(`.popup-title`);
const popupText = document.querySelector(`.popup-content`);
const popupCloseButton = document.querySelector(`.popup-close`);
const hearts = document.querySelectorAll(`.heart`);
const cards = document.querySelectorAll(`.card`)
let correctCard;

health = 2
const wrong = () => {
    if (health >= 0) {
        hearts[health].src = `../assets/heartempty.png`;
    }
    if (health > 0) {
        popupTitle.innerHTML = `Incorrect`;
        popupText.innerHTML = `You chose the wrong item, the item that is the best for the enviorment would be: ` + correctCard.dataset.name;
        popup.dataset.active = `true`;
    } else {
        popupTitle.innerHTML = `You Lost`;
        popupText.innerHTML = `Unfortunately you answered wrong 3 times.`;
        popupCloseButton.innerHTML = `Home`
        popup.dataset.active = `true`;
        popup.addEventListener(`click`, leaveListener);
    }
    health--;
}

const leaveListener = () => {
    home();
    popup.removeEventListener(`click`, leaveListener);
}

const right = () => {
    if (id < 5) {
        popupTitle.innerHTML = `Correct!`;
        popupText.innerHTML = `the item with the least enviormental impact is in fact: ` + correctCard.dataset.name;
        popup.dataset.active = `true`;
        popup.addEventListener(`click`, nextListener);
    } else {
        popupTitle.innerHTML = `You Won!`;
        if (health == 2) {
            popupText.innerHTML = `Amazing! You found all the correct choices without making a single mistake.`;
        } else {
            popupText.innerHTML = `Good job, you found all the correct choices.`;
        }
        popupCloseButton.innerHTML = `Home`
        popup.dataset.active = `true`;
        popup.addEventListener(`click`, leaveListener);
    }
}

const nextListener = () => {
    newCards();
    popup.removeEventListener(`click`, nextListener);
}

let id = 0
const newCards = () => {
    if (id <= 5) {
        let previousNumbers = [];
        for (const card of cards) {
            let newNumber = Math.floor(Math.random() * (cardImages.length - 1)) + 1;
            while (previousNumbers.indexOf(cardImages[newNumber].score) != -1) {
                newNumber = Math.floor(Math.random() * (cardImages.length - 1)) + 1;
            }
            previousNumbers.push(cardImages[newNumber].score);
            let cardToCreate = cardImages[newNumber];
            card.dataset.name = cardToCreate.name;
            card.children[0].innerHTML = cardToCreate.name;
            card.children[1].src = `../assets/cards/` + cardToCreate.img;
            card.children[2].innerHTML = `Lifespan: ${cardToCreate.lifeSpan} <br> Carbon Emissions: ${cardToCreate.carbonEmissions} <br> Eco Friendly: ${cardToCreate.ecoFriendly} <br> Price: ${cardToCreate.price} <br>`;
        }
        id++;
        correctCard = cards[previousNumbers.indexOf(Math.max(...previousNumbers))];
    }
}
newCards();

for (const card of cards) {
    card.addEventListener('click', () => {
        if (card == correctCard) {
            right()
        } else {
            wrong()
        }
    });
}
