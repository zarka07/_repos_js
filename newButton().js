/*Написать функцию-конструктор MyButton, которая создает кнопку, используя
тег <button>. Функция принимает параметры:
◼ цвет фона,
◼ цвет текста
◼ текст кнопки. */

function showBtn() {
var button = new Object();
 button.background = prompt("Введите цвет заднего фона кнопки: ",'grey');
 button.textColor = prompt("Введите цвет текста кнопки: ",'yellow');
 button.text = prompt("Введите текст кнопки: ","текст по умолчанию");
    document.write(`<button style="width: 300px; border-radius:10px 5px;margin: 50px auto;background-color:${button.background};color:${button.textColor};text-align:center;font-size:30px;">${button.text}</button>`);
}

