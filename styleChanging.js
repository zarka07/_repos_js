/*Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase стиле: font-size
в fontSize, background-color в backgroundColor, textalign в textAlign*/


let string=prompt("Введите стиль");
var newString=string.split('');
var i=0;
function searchI(newString){
   for(i;i<newString.length;i++){
    if(newString[i]=='-'){
        return newString[i+1].toUpperCase();
    }
   }
}
function change(string){
        var str="";
        var str=string.replace(/-[a-z]/,searchI(newString));
        return str;
    }
document.write("Исходная строка: "+string+'<br>'+"Редактированная строка: "+change(string));