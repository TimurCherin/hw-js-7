                                                    // ex 1
let lang = "ua";
switch (lang) {
    case "ua":
        console.log("Я");
        break;

    case "fr":
        console.log("Janvier");
        break;

    case "en":
        console.log("I");
        break;

    case "ger":
        console.log("Ich");
        break;

        default:
            console.log("Ви не вибрали мову")
}
                                                        // ex 2
const drink = prompt("Виберіть напій");
let cost;
switch (drink) {
    case "сік":
        cost = 8;
        console.log(`Ви вибрали сік, до сплати ${cost} грн`);
        break;

    case "чай":
        cost = 10;
        console.log(`Ви вибрали чай, до сплати ${cost} грн`);
        break;

    case "кава":
        cost = 12;
        console.log(`Ви вибрали каву, до сплати ${cost} грн`);
        break;
        
        default:
            console.log("Ви не вибрали напій");
}
                                                        // ex 3
const question = prompt("Який день тижня?");
let day;
switch (question) {
    case "понеділок":
        day = "робочий";
        console.log(day);
        break;
    
    case "вівторок":
        day = "робочий";
        console.log(day);
        break;

    case "середа":
        day = "робочий";
        console.log(day);
        break;
    
    case "четвер":
        day = "робочий";
        console.log(day);
        break;
    
    case "п'ятниця":
        day = "робочий";
        console.log(day);
        break;

    case "субота":
        day = "вихідний";
        console.log(day);
        break;
    
    case "неділя":
        day = "вихідний";
        console.log(day);
        break;

        default:
            console.log("Ви не ввели день тижня");
}
                                                        // ex 4
const month = prompt("Введіть місяць");
let season;
switch (month) {
    case "грудень":
        season = "winter";
        console.log(season);
        break;

    case "січень":
        season = "winter";
        console.log(season);
        break;

    case "лютий":
        season = "winter";
        console.log(season);
        break;

    case "березень":
        season = "spring";
        console.log(season);
        break;

    case "квітень":
        season = "spring";
        console.log(season);
        break;

    case "травень":
        season = "spring";
        console.log(season);
        break;

    case "червень":
        season = "sumer";
        console.log(season);
        break;
    
    case "липень":
        season = "sumer";
        console.log(season);
        break;

    case "серпень":
        season = "sumer";
        console.log(season);
        break;

    case "вересень":
        season = "autumn";
        console.log(season);
        break;

    case "жовтень":
        season = "autumn";
        console.log(season);
        break;

    case "листопад":
        season = "autumn";
        console.log(season);
        break;
}
                                                        // ex 5
const tabl = alert("7 * 1 = 7, 7 * 2 = 14, 7 * 3 = 21, 7 * 4 = 28, 7 * 5 = 35, 7 * 6 = 42, 7 * 7 = 49, 7 * 8 = 56, 7 * 9 = 63, 7 * 10 = 70");
                                                        // ex 6
const min = 12;
const max = 27;
let total = 0;

for (let i = min; i <= max; i++){
    total = total + i;
    console.log(total);
}
                                                        // ex 7
const maax = 9;
const miin = 3;
let totall = 1;
for (let i = miin; i <= maax; i++) {
    if (i % 2 === 1) {
        totall = totall * i;
        console.log(totall);
    }
}
                                                        // ex 8
const maaax = 99;
const miiin = 1;
for (let i = miiin; i <= maaax; i++) {
    if (i === 49){
        break;
    }
    console.log(i);
}
                                                        // ex 9
for (let i = 10; i <= 30; i++) {
    if (i === 15){
        continue;
    }
    console.log(i);
}
                                                        // ex 10
let totalPrice = 0; 
const goods = 10;
for (let i = 1; i <= goods; i += 1) {
    const price = Math.round(Math.random() * (5000 - 500) + 500);
    totalPrice = totalPrice + price;
}
console.log(totalPrice);
                                                        // ex 11
let counter = 1;

while (counter <= 5) {
    console.log(counter)
    counter += 1;
}

for (let i = 1; i <= 5; i += 1) {
    console.log(i);
}
                                                        // ex 12
let number = prompt("Введіть число більше 100");
do {
   number = Number(number);
} while (number >= 100)
                                                        // Додаткове завдання
let contry = (prompt("Введіть назву країни у яку бажаєте замовити доставку")).toLocaleLowerCase();
let costt;
switch (contry){
    case "китай":
    costt = 100;
    console.log(`Доставка в ${contry} буде коштувати ${costt} кредитів`);
    break;

    case "чилі":
    costt = 250;
    console.log(`Доставка в ${contry} буде коштувати ${costt} кредитів`);
    break;

    case "австралія":
    costt = 170;
    console.log(`Доставка в ${contry} буде коштувати ${costt} кредитів`);
    break;

    case "індія":
    costt = 80;
    console.log(`Доставка в ${contry} буде коштувати ${costt} кредитів`);
    break;

    case "ямайка":
    costt = 120;
    console.log(`Доставка в ${contry} буде коштувати ${costt} кредитів`);
    break;

    default:
        const message = alert("У вашій країні доставка недоступна")
}

