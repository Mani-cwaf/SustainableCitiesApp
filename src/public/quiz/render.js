const Questions = [
    {
        id: 0,
        q: `What is the definition of sustainability?`,
        a: [
            { text: `Actions that meet the needs of today, regardless of future generations.`, isCorrect: false },
            { text: `Actions that meet the needs of future generations but not the needs of today.`, isCorrect: false },
            { text: `Actions that meet the needs of today, without crippling the needs of future generations.`, isCorrect: true },
            { text: `Actions that do not meet the needs of people.`, isCorrect: false }
        ],
        i: `Sustainable actions meet both the needs of today and future generations.`
    },
    {
        id: 1,
        q: `Which of the following are all examples of renewable energy sources?`,
        a: [
            { text: `Bioethanol, natural gas, petroleum`, isCorrect: false },
            { text: `Geothermal, wind, solar`, isCorrect: true },
            { text: `Hydroelectricity, coal, nuclear`, isCorrect: false },
            { text: `None of the above`, isCorrect: false }
        ],
        i: `Geothermal, wind, and solar are all examples of renewable energy sources`
    },
    {
        id: 2,
        q: `How many people are expected to live in Asia-Pacific cities by 2030?`,
        a: [
            { text: `1.3 million`, isCorrect: false },
            { text: `1.3 billion`, isCorrect: false },
            { text: `2.6 million`, isCorrect: false },
            { text: `2.6 billion`, isCorrect: true }
        ],
        i: `By 2030, approximately 2.6 billion are expected to populate Asia-Pacific cities.`
    },
    {
        id: 3,
        q: `Where is the worlds largest windfarm located?`,
        a: [
            { text: `United Kingdom`, isCorrect: true },
            { text: `India`, isCorrect: false },
            { text: `China`, isCorrect: false },
            { text: `Austrailia`, isCorrect: false }
        ],
        i: `The world's largest wind farm is located in the United Kingdom.`
    },
    {
        id: 4,
        q: `Which of these is an example of social sustainability?`,
        a: [
            { text: `Rivers are kept clear and clean of waste and pollution`, isCorrect: false },
            { text: `There are enough schools and doctors`, isCorrect: true },
            { text: `There are lots of well-paid jobs in energy development`, isCorrect: false },
            { text: `International trade is eradicated.`, isCorrect: false }
        ],
        i: `Having enough schools and doctors will contribute to social sustainability.`
    },
    {
        id: 5,
        q: `Which of these is an example of economic sustainability?`,
        a: [
            { text: `Rivers are kept clear and clean of waste and pollution`, isCorrect: false },
            { text: `There are enough schools and doctors`, isCorrect: false },
            { text: `There are lots of well-paid jobs in energy development`, isCorrect: true },
            { text: `International trade is eradicated`, isCorrect: false }
        ],
        i: `Having lots of well-paid jobs in the renewable energy development sector will contribute substantially to economic sustainability.`
    },
    {
        id: 6,
        q: `Which of these is an example of environmental sustainability?`,
        a: [
            { text: `Rivers are kept clear and clean of waste and pollution`, isCorrect: true },
            { text: `There are enough schools and doctors`, isCorrect: false },
            { text: `There are lots of well-paid jobs in energy development`, isCorrect: false },
            { text: `International trade is eradicated`, isCorrect: false }
        ],
        i: `Keeping rivers clear and clean of waste and pollution will contribute to environmental sustainability.`
    }
];

const options = document.querySelectorAll(`.option`);
const hearts = document.querySelectorAll(`.heart`);
const submit = document.querySelector(`.submit`);
const question = document.querySelector(`.question-container`);
const popup = document.querySelector(`.popup`);
const popupTitle = document.querySelector(`.popup-title`);
const popupText = document.querySelector(`.popup-content`);
const popupCloseButton = document.querySelector(`.popup-close`);

let selected = false;

health = 2
const wrong = () => {
    if (health >= 0) {
        hearts[health].src = `../assets/heartempty.png`;
        for (let option of options) {
            if (option.classList.contains(`active`)) {
                option.style.color = `red`;
            }
        }
    }
    if (health > 0) {
        popupTitle.innerHTML = `Incorrect!`;
        popupText.innerHTML = Questions[id-1].i;
        popup.dataset.active = `true`;
    } else {
        popupTitle.innerHTML = `You Lost`;
        popupText.innerHTML = `Unfortunately you answered 3 questions wrong.`;
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
    if (id <= Questions.length - 1) {
        for (let option of options) {
            option.style.color = `white`;
        }
        popupTitle.innerHTML = `Good Job!`;
        popupText.innerHTML = Questions[id-1].i;
        popup.dataset.active = `true`;
        popup.addEventListener(`click`, nextListener);
    } else {
        popupTitle.innerHTML = `You Won!`;
        if (health == 2) {
            popupText.innerHTML = `Amazing! You answered all the questions correctly without making a single mistake.`;
        } else {
            popupText.innerHTML = `Great job, you answered all the questions.`;
        }
        popupCloseButton.innerHTML = `Home`
        popup.dataset.active = `true`;
        popup.addEventListener(`click`, leaveListener);
    }
}

const nextListener = () => {
    newQuestion();
    popup.removeEventListener(`click`, nextListener);
}

let id = 0
const newQuestion = () => {
    if (id <= Questions.length - 1) {
        selected = false
        for (const option of options) {
            option.classList.remove(`active`);
        }
        let index = 0
        for (let option of options) {
            option.innerHTML = Questions[id].a[index].text;
            option.value = Questions[id].a[index].isCorrect;
            index++;
        }
        question.innerHTML = Questions[id].q;
        id++;
    }
}
newQuestion();

submit.addEventListener(`click`, () => {
    if (Array.from(options).some(option => option.classList.contains(`active`))) {
        if (selected == `true`) {
            right();
        } else {
            wrong();
        }
    }
})

for (const option of options) {
    option.addEventListener(`click`, () => {
        if (option.classList.contains(`active`)) {
            option.classList.remove(`active`);
            selected = false
        } else {
            for (const e of options) {
                e.classList.remove(`active`);
            }
            option.classList.add(`active`);
            selected = option.value;
        }
    });
}

