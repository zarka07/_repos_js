/*Написать функцию, которая принимает двузначное число
и возвращает его в текстовом виде. */

function numToText(number) {
  let firstNum = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
  let secondNum = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семнадцать', 'Восемнадцать', 'Девятнадцать', 'Двадцать'];
  let thirdNum = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
  if(isNaN(number)||number<10||number>99){return "error - entered digit is NaN or it's less than 10 or more than 99"}
  if (number >= 10 && number <= 20) {
    return secondNum[number - 10];
  }
  if (number > 20 && number <= 99 && number!=30&& number!=40&& number!=50&& number!=60&& number!=70&& number!=80&& number!=90) {
    let str = `${number}`;
    str = str.split('');
    let first = str[0];
    let second = str[1];
    return `${thirdNum[first - 2]} ${firstNum[second - 1]}`;
  }
    if(number==30){return `${thirdNum[1]}`}
    if(number==40){return `${thirdNum[2]}`}
    if(number==50){return `${thirdNum[3]}`}
    if(number==60){return `${thirdNum[4]}`}
    if(number==70){return `${thirdNum[5]}`}
    if(number==80){return `${thirdNum[6]}`}
    if(number==90){return `${thirdNum[7]}`}
    if(number>99){return 0}
}
let digit=+prompt("Введите число от 10 до 99");
document.write(numToText(digit));

