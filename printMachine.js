/*Реализовать класс PrintMaсhine, которой состоит из:
◼ размера шрифта;
◼ цвета шрифта;
◼ семейства шрифта;
◼ метода print(), который принимает текст и печатает его соответствующим
шрифтом с помощью document.write().
Создать объект такого класса и продемонстрировать работу метода*/

class PrintMachine {
    constructor(fs, c,ff,text) {
        this.fontSize = fs;
        this.color = c;
        this.fontFamily=ff;
        this.text=text;
    }
    print() {   document.write(`<p style="font-size:${this.fontSize};color:${this.color};font-family:${this.fontFamily}">${text}</p>`) }
}
var fs=+prompt("Введите размер шрифта: ",15);
var c=prompt("Введите цвет шрифта: ",'black');
var ff=prompt("Введите семейство шрифта: ",'Arial');
var text=prompt("Введите текст: ",'текст по умолчанию');
let printer1=new PrintMachine(fs,c,ff,text);
printer1.print();