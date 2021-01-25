/*Написать скрипт, который получает «заказ» у пользователя и выводит ему счет
с учетом закзазанных блюд.*/

let zakuska=prompt('выберите закуску(салат)');
let pervoe=prompt('выберите первое');
let vtoroe=prompt('выберите второе');
let desert=prompt('выберите десерт');
var zak=0;
if(zakuska==null) zak=0;
    else zak=10.5;
var perv=0;
if(pervoe==null) perv=0;
    else perv=15.3;
var vtor=0;
if(vtoroe==null) vtor=0;
    else vtor=12.6;
var des=0;
if(desert==null) des=0;
    else des=25.8;
function summa(){
    return sum=zak+perv+vtor+des;
}
alert('Вы заказали\n\t'+zakuska+'- '+zak+' грн\n\t'+pervoe+'-'+perv+' грн\n\t'+vtoroe+'- '+vtor+' грн\n\t'+desert+'-'+des+' грн\nИтого: '+summa()+' грн');