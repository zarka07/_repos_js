/*Написать программу, предлагающую пользователю подсчитывать сумму
постоянно увеличивающихся чисел */
var num1=0;
var num2=0;
var sum1=0;
var sum2=0;
var count=0;
var coef=5;
while(sum1==sum2)
    {
        num1=+prompt('Введите первое число');
        num2=+prompt('Введите второе число');
        if(isFinite(num1)&&isFinite(num2)){
            sum1=coef*(num1+num2);
            sum2=+prompt('Умножьте каждое число на '+coef+' и введите их сумму: ');    
            coef+=5;
            count+=1;
        }
        else break;
    }
    
alert('К сожалению, Вы все-таки ошиблись после '+count+' попыток')