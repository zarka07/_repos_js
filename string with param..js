/*Написать функцию, которая принимает цвет фона, цвет текста, строку с
текстом и выводит методом document.write() абзац с
соответствующими стилями.*/

var text=prompt('input text');
var bgcolor=prompt('input bgcolor')||'grey';
var color=prompt('input txt color')||'yellow';
function createDiv(text,bgcolor,color){
    let str="";
   str=`<p style="width: 50%; margin: 50px auto;background-color:${bgcolor};color:${color};text-align:center;font-size:30px;">${text}</p>`;
    document.write(str);
}
var str=createDiv(text,bgcolor,color); 