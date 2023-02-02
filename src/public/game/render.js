const cardImages = [
    {
        index: 0,
        img: `card-bag.png`,
        name: `Plastic Bag`,
        lifeSpan: `Low`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Low`,
        catagory: `container`,
        score: 15
    },
    {
        index: 1,
        img: `card-bread.png`,
        name: `Bread`,
        lifeSpan: `Short`,
        carbonEmissions: `Medium`,
        ecoFriendly: `Medium`,
        price: `Low`,
        catagory: `food-normal`,
        score: 55
    },
    {
        index: 2,
        img: `card-burger.png`,
        name: `Burger`,
        lifeSpan: `Low`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `High`,
        catagory: `food-junk`,
        score: 10
    },
    {
        index: 3,
        img: `card-can.png`,
        name: `Aluminum Can`,
        lifeSpan: `High`,
        carbonEmissions: `Medium`,
        ecoFriendly: `High`,
        price: `Low`,
        catagory: `container`,
        score: 70
    },
    {
        index: 4,
        img: `card-cheese.png`,
        name: `Cheese`,
        lifeSpan: `Medium`,
        carbonEmissions: `Medium`,
        ecoFriendly: `Medium`,
        price: `High`,
        catagory: `food-normal`,
        score: 50
    },
    {
        index: 5,
        img: `card-watermelon.png`,
        name: `Watermelon`,
        lifeSpan: `Low`,
        carbonEmissions: `Low`,
        ecoFriendly: `High`,
        price: `Low`,
        catagory: `food-fresh`,
        score: 85
    },
    {
        index: 6,
        img: `card-donut.png`,
        name: `Donut`,
        lifeSpan: `Low`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Medium`,
        catagory: `food-dessert`,
        score: 15
    },
    {
        index: 7,
        img: `card-flour.png`,
        name: `Flour`,
        lifeSpan: `High`,
        carbonEmissions: `Low`,
        ecoFriendly: `High`,
        price: `Low`,
        catagory: `food-ingredient`,
        score: 95
    },
    {
        index: 8,
        img: `card-honey.png`,
        name: `Honey`,
        lifeSpan: `High`,
        carbonEmissions: `Low`,
        ecoFriendly: `High`,
        price: `High`,
        catagory: `sweetener`,
        score: 90
    },
    {
        index: 9,
        img: `card-icecream.png`,
        name: `Ice Cream`,
        lifeSpan: `Low`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Medium`,
        catagory: `food-dessert`,
        score: 20
    },
    {
        index: 10,
        img: `card-mango.png`,
        name: `Mango`,
        lifeSpan: `Medium`,
        carbonEmissions: `Low`,
        ecoFriendly: `High`,
        price: `Medium`,
        catagory: `food-fresh`,
        score: 80
    },
    {
        index: 11,
        img: `card-jaggery.png`,
        name: `Jaggery`,
        lifeSpan: `High`,
        carbonEmissions: `Medium`,
        ecoFriendly: `Medium`,
        price: `Low`,
        catagory: `sweetener`,
        score: 68
    },
    {
        index: 12,
        img: `card-onion.png`,
        name: `Onion`,
        lifeSpan: `High`,
        carbonEmissions: `Low`,
        ecoFriendly: `High`,
        price: `Low`,
        catagory: `food-fresh`,
        score: 95
    },
    {
        index: 13,
        img: `card-sandwich.png`,
        name: `Sandwich`,
        lifeSpan: `Low`,
        carbonEmissions: `Medium`,
        ecoFriendly: `Medium`,
        price: `Medium`,
        catagory: `food-junk`,
        score: 60
    },
    {
        index: 14,
        img: `card-paperbag.png`,
        name: `Paper Bag`,
        lifeSpan: `Low`,
        carbonEmissions: `Low`,
        ecoFriendly: `High`,
        price: `Low`,
        catagory: `container`,
        score: 70
    },
    {
        index: 15,
        img: `card-basket.png`,
        name: `Plastic Basket`,
        lifeSpan: `Medium`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Low`,
        catagory: `container`,
        score: 20
    },
    {
        index: 16,
        img: `card-battery.png`,
        name: `Single Use Battery`,
        lifeSpan: `Low`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Low`,
        catagory: `electronics`,
        score: 15
    },
    {
        index: 17,
        img: `card-tupperware.png`,
        name: `Plastic Tupperware`,
        lifeSpan: `High`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Low`,
        catagory: `container`,
        score: 40
    },
    {
        index: 18,
        img: `card-butter.png`,
        name: `Butter`,
        lifeSpan: `Medium`,
        carbonEmissions: `High`,
        ecoFriendly: `Medium`,
        price: `Medium`,
        catagory: `food-ingredient`,
        score: 50
    },
    {
        index: 19,
        img: `card-flashlight.png`,
        name: `Solar Powered Flashlight`,
        lifeSpan: `High`,
        carbonEmissions: `Low`,
        ecoFriendly: `High`,
        price: `High`,
        catagory: `electronics`,
        score: 87
    },
    {
        index: 20,
        img: `card-sugar.png`,
        name: `Sugar`,
        lifeSpan: `Medium`,
        carbonEmissions: `Medium`,
        ecoFriendly: `Medium`,
        price: `Low`,
        catagory: `sweetener`,
        score: 55
    },
    {
        index: 21,
        img: `card-bulb.png`,
        name: `Incandescent Light Bulb`,
        lifeSpan: `Low`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Low`,
        catagory: `electronics`,
        score: 25
    },
    {
        index: 22,
        img: `card-cake.png`,
        name: `Cake`,
        lifeSpan: `Low`,
        carbonEmissions: `High`,
        ecoFriendly: `Medium`,
        price: `Mediums`,
        catagory: `food-dessert`,
        score: 55
    },
    {
        index: 23,
        img: `card-pizza.png`,
        name: `Pizza`,
        lifeSpan: `Low`,
        carbonEmissions: `High`,
        ecoFriendly: `Low`,
        price: `Medium`,
        catagory: `food-junk`,
        score: 55
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
        popupText.innerHTML = `The correct answer is: ${correctCard.dataset.name}`;
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
    if (id < 10) {
        popupTitle.innerHTML = `Correct!`;
        popupText.innerHTML = `${correctCard.dataset.name} is the correct answer`;
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
    if (id <= 10) {
        let previousNumbers = [];
        let previousCatagories = [];
        for (const card of cards) {
            let newNumber = Math.floor(Math.random() * (cardImages.length - 1)) + 1;
            let cardToCreate = cardImages[newNumber];
            if (previousCatagories.length == 0) {
                while (previousNumbers.indexOf(cardToCreate.score) != -1) {
                    newNumber = Math.floor(Math.random() * (cardImages.length - 1)) + 1;
                    cardToCreate = cardImages[newNumber];
                    console.log(cardImages[newNumber])
                }
            } else {
                while (previousNumbers.indexOf(cardToCreate.score) != -1 || previousCatagories.indexOf(cardToCreate.catagory) == -1) {
                    newNumber = Math.floor(Math.random() * (cardImages.length - 1)) + 1;
                    cardToCreate = cardImages[newNumber];
                    console.log(cardImages[newNumber])
                }
            }

            previousNumbers.push(cardToCreate.score);
            previousCatagories.push(cardToCreate.catagory);
            card.dataset.name = cardToCreate.name;
            card.children[0].innerHTML = cardToCreate.name;
            card.children[1].src = `../assets/cards/` + cardToCreate.img;
            card.children[2].innerHTML = `Lifespan: ${cardToCreate.lifeSpan} <br> Carbon Emissions: ${cardToCreate.carbonEmissions} <br> Eco Friendliness: ${cardToCreate.ecoFriendly} <br> Price: ${cardToCreate.price} <br>`;
            card.style.display = 'flex';
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
            card.style.display = 'none';
        }
    });
}
