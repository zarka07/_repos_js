/*Написать функцию, которая принимает время (часы, минуты, секунды)
и выводит его на экран в формате «чч:мм:сс».*/
function concat_time() {
     str='';
    var hh=+prompt('введите часы');
    var mm=+prompt('введите минуты');
    var ss=+prompt('введите секунды');
    if(ss>=0&&ss<60){
        if(mm>=0&&mm<60){
            if(hh>=0&&hh<24){str=hh+':'+mm+":"+ss;
                return `время на часах: `,str;}
            else return `неправильно указаны часы`
        }
        else return `неправильно указаны минуты`
    }
    else return `неправильно указаны секунды`
}
alert(concat_time());