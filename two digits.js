/*Написать функцию, которая принимает 2 числа и возвращает -1, если
первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 –
если числа равны*/

var num1,num2;
function my_func(num1,num2){
    if(num1<num2) alert(-1);
    else if(num1>num2) alert(1);
    else if(num1==num2) alert(0);
}
my_func(+prompt('введите первое число',num1),+prompt('введите второе число',num2));