/*Используя диалоговое окно confirm(), необходимо спросить у пользователя...
В результате такого мини-опроса нужно вывести «Вы знаете …цифра… языков»*/

var count=0;
var lang=0;
lang=confirm('Do you speak English?');
        if(lang){
            count++;
        }
        else;
lang=confirm('Parlez-vous Francais?');
        if(lang){
            count++;
        }
        else;
lang=confirm('Sprechen Zi Deutch?');
        if(lang){
            count++;
        }
        else;
lang=confirm('Чи володієте Ви українською мовою?');
        if(lang){
            count++;
        }
        else;
lang=confirm('Говорите по-русски?');
        if(lang){
            count++;
        }
        else;
lang=confirm('НаЫа Usted...espanol?');
        if(lang){
            count++;
        }
        else;
document.write('вы знаете '+count+' языка (-ов)')