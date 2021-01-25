/*Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию передали 1
параметр, то она вычисляет площадь квадрата*/
var num1,num2;
function square(num1,num2){
    if(num1&&num2) return num1*num2;
    else if(num1&&isNaN) return num1*num1;
}
alert('площадь равна: '+square(+prompt('введите длину',num1),+prompt('введите ширину',num2)));