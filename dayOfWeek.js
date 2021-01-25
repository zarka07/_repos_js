/*Написать скрипт, предлагающий пользователю ввести день недели (напр. 4), на
экран вывести название дня (“четверг”).*/

let dOw=+prompt('введите день недели');

switch(dOw){
        case (1): document.write('День недели — понедельник');
            break;
        case (2): document.write('День недели — вторник');
            break;
        case (3): document.write('День недели — среда');
            break;
        case (4): document.write('День недели — четверг');
            break;
        case (5): document.write('День недели — пятница');
            break;
        case (6): document.write('День недели — суббота');
            break;
        case (7): document.write('День недели — воскресенье');
            break;
    default: document.write('такого номера дня недели не существует');
}
