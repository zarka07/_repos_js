let sum=0;
let mark=0;
var questions=['На ноль делить можно?','Волга впадает в Каспийское море?','Атм. давление увеличивается с высотой?','2х2=8?','Дельфины это рыбы?','Арбуз это ягода?','Волосы вероники - это созвездие?','Мадонна - настоящее имя певицы?'];
var answers=[];
for(let i=0;i<questions.length;i++){
    var isOk=confirm(questions[i]);
        if(isOk){
            answers[i]=10;
            sum+=10;
        };
        if(!isOk){answers[i]=0};
}
document.write("<table style='width:100%;border: 4px black;border-style:ridge'><th><p style='color:black;text-align:center;font-size:30px;margin: 0px;border: 2px black dotted'>Вопросы</p></th>,<th><p style='color:black;text-align:center;font-size:30px;margin: 0px;border: 2px black dotted'>Баллы</p></th>");
function createDiv(questions,answers){
   let div1='';
    let div2='';
    div1=`<th><p style="color:black;text-align:left;font-size:20px;margin: 0px;border: 2px dotted">${questions}</p></th>`;
    div2=`<th><p style="color:black;text-align:center;font-size:20px;margin: 0px;border: 2px black dotted">${answers}</p></th>`;
    document.write(div1+' '+div2);
}
for(i=j=0;i<questions.length;i++,j++){
    document.write("<tr>");
    createDiv(questions[i],answers[i])
    };
    document.write("</tr>");
let div3=`<th><div style="color:black;text-align:center;font-size:30px;margin: 0px;border: 2px dotted">Итого:</div></th><th><div style="color:black;text-align:center;font-size:30px;margin: 0px;border: 2px dotted">${sum}</div></th>`;
document.write(div3);
document.write("</table>");




 