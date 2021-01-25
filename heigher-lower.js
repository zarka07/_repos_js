/*Написать функцию, которая заменяет в полученной строке
большие буквы на маленькие, маленькие – на большие, а
цифры – на знак нижнего подчеркивания*/

let string=prompt("Введите строку");
var new_str = "";
function styleFormat(Name) {
  for (let i = 0; i < Name.length; i++) {
    if (Name[i] === Name[i].toLowerCase()) {
      new_str += Name[i].toUpperCase();
    } else {
      new_str += Name[i].toLowerCase();
    }
  }
  return new_str;    
}
function changeDigit(new_str){
        var str="";
        var str=new_str.replace(/\d/ig,'_');
        return str;
    }
styleFormat(string);
document.write("Исходная строка: "+string+'<br>'+"Редактированная строка: "+changeDigit(new_str));