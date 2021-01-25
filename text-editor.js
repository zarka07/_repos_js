/*Написать скрипт, реализующий простейший редактор сообщения*/

let bold=document.getElementById('bold');
    bold.onclick=function(){
    if(this.checked){
        document.getElementById('after').style.fontWeight="bold";
    }
    else{
        document.getElementById('after').style.fontWeight="normal";
    }
}
let italic=document.getElementById('italic');
    italic.onclick=function(){
    if(this.checked){
       document.getElementById('after').style.fontStyle="italic";
    }
    else{
        document.getElementById('after').style.fontStyle="normal";
    }
}

let checkbox=document.getElementById("chooseColor");

let buttons=checkbox.nextElementSibling;
    checkbox.onclick=function(){
    if(this.checked){
        document.getElementById("radios").style.display = "inline";
    }
    else{
        document.getElementById("radios").style.display = "none";
    }
}


let color=document.getElementsByName('color');
for(radio of color){
    radio.onclick=function(){
       document.getElementById('after').style.color=this.value;
    }
}

let convert=document.getElementsByName('convert')[0];
let textBefore=document.getElementById('before');
let textAfter=document.getElementById('after');

convert.onclick=function(){
    if(textBefore.value.length<1){
        alert("Вы не ввели текст")
    }
    textAfter.value=textBefore.value;  
}