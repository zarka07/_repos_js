/*Дан массив из 15 элементов. Вывести вначале его элементы с четными индексами, а
затем — с нечетными*/

var numbers = [20, 35, 90, 175, 50, 25, 48, 56, 31, 28, 2, -64, 33, -92, 5];
document.write('исходный массив: '+'<br>'+numbers.join(' ')+'<br>')
document.write('с четными индексами: '+'<br>')
for(let i=0;i<numbers.length;i++){
    if(i%2==0)
        document.write('['+i+']'+':'+numbers[i]+' ');
}
document.write('<br>'+'с нечетными индексами: '+'<br>');
for(let i=0;i<numbers.length;i++){
    if(i%2!=0)
        document.write('['+i+']'+':'+numbers[i]+' ');
}