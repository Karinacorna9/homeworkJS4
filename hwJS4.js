// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareOfRound(a, b) {
    let res = a * b * Math.PI
    console.log(res)
}
squareOfRound(9, 6)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareOfKolo(r) {
    let res = r * r * Math.PI
    console.log(res)
}
squareOfKolo(25)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareOfCylinder(r, h) {
    let res = 2 * Math.PI * r * h
    console.log (res)
}
squareOfCylinder(11, 4)

// - створити функцію яка приймає масив та виводить кожен його елемент

function showMassiveElements(arr) {
    for (let element of arr) {
        console.log(element);
    }
}
let MassiveElements = [1, 2, 3, 4, 5];
showMassiveElements(MassiveElements);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraf(text) {
    let paragraf = document.createElement('p');
    paragraf.textContent = text;
    document.body.appendChild(paragraf);
}
let textParagraf = "Lorem ipsum dolor sit amet.";
createParagraf(textParagraf);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createTitle(textWithLi) {
    let title = document.createElement('ul');
        for (let i = 0; i < 3; i++) {
        let element = document.createElement('li');
        element.textContent = textWithLi;
        title.appendChild(element);
    }
    document.body.appendChild(title);
}
let textWithLi = "nvjdunvbjifdzbvj zdfnijf jhbhjbhj";
createTitle(textWithLi);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createTitle(howMuchLi, textLi) {
    let title = document.createElement('ul');
        for (let i = 0; i < howMuchLi; i++) {
        let element = document.createElement('li');
        element.textContent = textLi;
        title.appendChild(element);
    }
    document.body.appendChild(title);
}
let howMuchLi = 7;
let textLi = "Lorem ipsum dolor sit amet, consectetur adipisicing.";
createTitle(howMuchLi, textLi);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createTitleWithMassive(arr) {
    let title = document.createElement('ul');
    for (let element of arr) {
        let elementTitle = document.createElement('li');
        elementTitle.textContent = element;
        title.appendChild(elementTitle);
    }
    document.body.appendChild(title);
}
let array = [1, 3, 8, "difvbnai", true, 4.5, 5736, -999, "jnvirbvniape", false];
createTitleWithMassive(array);