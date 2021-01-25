/*Дан массив случайных чисел из 10 элементов. Нужно проверить, есть ли в этом
массиве числа 22, 48, 96 и вывести индекс элемента и его значение, если оно
встретилось в массиве, и -1, если такого элемента в массиве нет. */

let empty=[];
let i;
for (i=0;i<10;i++){
    empty[i]=Math.trunc(Math.random()*100);
    var element=empty[i];
}
document.write(empty.join(', '));


empty.forEach(function(element,i) {
    if(element==22) document.write('<br>arr['+i+'] = 22');
    if(element==48) document.write('<br>arr['+i+'] = 48');
    if(element==96) document.write('<br>arr['+i+'] = 96');
    else document.write('<br>'+-1);
})