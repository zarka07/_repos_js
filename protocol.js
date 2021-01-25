/*Написать функцию, которая получает url и выводит подробную информацию о нем.*/

var str0=prompt("Введите адрес: ");
function pars(str0){
    var str=document.createElement("a");
    str.href=str0;
    var protocol=str.protocol;
    var domen=str.hostname;
    var way=str.pathname;
    document.write("Протокол: "+protocol+'<br>'+"Домен: "+domen+'<br>'+"Путь: "+way);
}
pars(str0);