function counter(str){
    var reC=/[а-я]/ig;
    var reL=/[a-z]/ig;
    var reD=/[0-9]/ig;
    var reCh=/[\s\w]/ig;
    var foundC=str.match(reC);
    var foundL=str.match(reL);
    var foundD=str.match(reD);
    var foundCh=str.match(reCh);
    document.write('строка: '+str+'<br>'+'<br>');
document.write('количество букв кириллицей: '+foundC.length+'<br>');
document.write('количество букв латиницей: '+foundL.length+'<br>');
document.write('количество цифр: '+foundD.length+'<br>');
document.write('количество символов: '+foundCh.length+'<br>');
}
let str="уж я, 10,12э;стодвадцать5 -раз Ве!никI не_вя*у";
    counter(str);