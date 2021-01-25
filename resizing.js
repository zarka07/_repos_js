/*Напишите скрипт, который изменяет размер изображения в зависимости от
выбранного переключателя формы, который указывает на ширину фото в пикселах (рисунок
1).
*/

let cat = document.chooseCat.cat;
console.log(cat);
for(radio of cat){
    radio.onclick = function(){
        document.body.style.backgroundImage = 'url('+this.value+')'
    }
}