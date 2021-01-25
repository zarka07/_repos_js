/*Написать программу, предлагающую пользователю вводить слова, пока
ему не надоест выполнять одну и ту же операцию */

var str=" ";
var word=" ";
var isOk;
    do {
        word=prompt('введите слово:')
        if(word){
        str=str+' '+word;
        isOk=confirm('хватит?');
        if(isOk){
            document.write('Строка: ', str );
            break;
            }
        }
        if(!word){
            document.write('Строка: ', str );
            break;
        }
    }
    while (!isOk);
