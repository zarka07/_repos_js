var month=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

var color=['#1e90ff','#4876ff',' #6495ED',' #AFEEEE','#00FF00','#ffff00','#ffd700','#ffa54f',' #ffa500','#ff0000','#ab82ff','#00bfff'];

function createDiv(month,color){
   let div='';
    div=`<p style="background-color:${color};color:black;text-align:center;font-size:30px;margin: 0px;">${month}</p>`;
    document.write(div);
}
for(let i=0,j=0;i<month.length;i++,j++){
createDiv(month[i],color[i])};
