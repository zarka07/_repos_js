/*Создать объект, описывающий автомобиль (производитель, модель, год выпуска,
средняя скорость), и следующие функции для работы с этим объектом:
1. Функция для вывода на экран информации об автомобиле.
2. Функция для подсчета необходимого времени для преодоления переданного
расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги
водителю необходимо делать перерыв на 1 час.
*/

var auto = new Object();
 auto.manufacturer = 'BMW';
 auto.model = 'X6';
 auto.year = '2019';
 auto.avSpeed = '120';
 function print(obj){
     let auto=new Object(obj);
     console.log(auto);
 }
print(auto);
let distance=+prompt("введите расстояние в км: ");
function time(distance){
    let time=distance/auto.avSpeed;
    if(time<=4){
        return time.toFixed(2);
    }
    if(time<8){
        return (time+1).toFixed(2);
    }
    if(time>=8){//15
        let temp=Math.trunc(time)/4;
        return (time+temp).toFixed(2);
    }
    else return 0;
}
let result=time(distance);
document.write("Вы преодоолеете это расстояние на "+auto.manufacturer+" "+auto.model+" за ~ "+result+" часа(-ов)");