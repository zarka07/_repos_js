/*Написать функцию, которая принимает словосочетание
и превращает его в аббревиатуру.*/ 

let str=prompt("Введите строку");
function transform(str){
  var nArr=str.split(' ');
    for(let i=0;i<nArr.length;i++){
    document.write(nArr[i].toUpperCase().slice(0,1));
}  
}
transform(str);