let lang = "ua";
switch (lang) {
  case "ua":
    console.log("Січень");
    break;

  case "fr":
    console.log("Janvier");
    break;

  case "en":
    console.log("Janvier");
    break;

  case "ger":
    console.log("Januar");
    break;

  default:
    console.log("Ви не вибрали мову");
}
// ex 2
const drink = prompt("Виберіть напій").toLocaleLowerCase();
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
const question = prompt("Який день тижня?").toLocaleLowerCase();
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
const month = Number(prompt("Який номер поточного місяця?"));
let season;
switch (month) {
  case 12:
    season = "winter";
    console.log(season);
    break;

  case 1:
    season = "winter";
    console.log(season);
    break;

  case 2:
    season = "winter";
    console.log(season);
    break;

  case 3:
    season = "spring";
    console.log(season);
    break;

  case 4:
    season = "spring";
    console.log(season);
    break;

  case 5:
    season = "spring";
    console.log(season);
    break;

  case 6:
    season = "summer";
    console.log(season);
    break;

  case 7:
    season = "summer";
    console.log(season);
    break;

  case 8:
    season = "summer";
    console.log(season);
    break;

  case 9:
    season = "autumn";
    console.log(season);
    break;

  case 10:
    season = "autumn";
    console.log(season);
    break;

  case 11:
    season = "autumn";
    console.log(season);
    break;

  default:
    console.log("Ви не ввели номер місяця");
}
// ex 5
let maxNumber = 20;
for (let i = 1; i <= maxNumber; i++) {
  let mult = i * 7;
  console.log(`${i} * 7 = ${mult}`);
} 

// ex 6
const min = 12;
const max = 27;
let total = 0;

for (let i = min; i <= max; i++) {
  total = total + i;
}
console.log(`sum = ${total}`);
// ex 7
const max2 = 9;
const min2 = 3;
let totalNumber = 1;
for (let i = min2; i <= max2; i++) {
  if (i % 2 === 1) {
    totalNumber = totalNumber * i;
  }
}
console.log(`totalNumber = ${totalNumber}`);
// ex 8
const maxNumb = 99;
const minNumb = 1;
for (let i = minNumb; i <= maxNumb; i++) {
  if (i === 49) {
    console.log("We find 47");
    break;
  }
  console.log(i);
}
// ex 9
for (let i = 10; i <= 30; i++) {
  if (i === 15) {
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
let counter1 = 1;

while (counter1 <= 5) {
  console.log(counter1);
  counter1 += 1;
}

let counter2 = 1;

do {
  console.log(counter2);
  counter2 += 1;
} while (counter2 <= 5);

for (let i = 1; i <= 5; i += 1) {
  console.log(i);
}

// ex 12
let number;
do {
  number = Number(prompt("Введіть число більше 100"));
  if (!number) {
    break;
  }
} while (number < 100);

// Додаткове завдання
let contry = prompt(
  "Введіть назву країни у яку бажаєте замовити доставку"
).toLocaleLowerCase();
let costt;
switch (contry) {
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
    const message = alert("У вашій країні доставка недоступна");
}
