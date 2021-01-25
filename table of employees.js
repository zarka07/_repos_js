/*А) Реализовать класс Employee, описывающий работника:
-имя фамилия
-должность
- телефон,
- email.
Создать массив работников банка.
В) Реализовать класс EmpTable для генерации html-кода таблицы со списком
работников банка. Массив работников необходимо передавать через конструктор,
а получать html код с помощью метода getHtml().
Создать объект класса EmpTable и вывести на экран результат работы метода.

 B Реализовать класс StyledEmpTable, который наследуется от класса EmpTable.
Добавить метод getStyles(), который возвращает строку со стилями для таблицы в
тегах style.
Переопределить метод getHtml(), который добавляет стили к тому, что
возвращает метод getHtml() из родительского класса.
Создать объект класса StyledEmpTable и вывести на экран результат работы
метода getHtml().*/

class Employee{
    constructor(fn,ln,r,ph,em){
        this.firstname=fn;
        this.lastname=ln;
        this.role=r;
        this.phone=ph;
        this.email=em;
    }
    showName=function (){
            return `${this.firstname+" "+this.lastname+" "}`
        }
    showRole=function (){
            return `${this.role+" "}`;
        }
    showPhone=function (){
            return `${this.phone+" "}`;
        }
    showEmail=function (){
            return `${this.email+" "}`;
        }
    }   
let Ivanov=new Employee('Иванов','Александр','бухгалтер','098-876-55-66 ','ivanov@bigmir.net');
let Petrova=new Employee('Петрова','Валентина','менеджер','098-456-33-66 ','petrova@ukr.net');
let Zyablik=new Employee('Зяблик','Дмитрий','директор','099-222-43-44 ','director@gmail.com');
let Malikov=new Employee('Маликов','Евгений','фин.директор','050-722-33-55 ','malikov_e@gmail.com');
var empArr=[Ivanov, Petrova, Zyablik, Malikov];

class EmpTable{
    constructor(empArr=[]){
        this.arr=empArr;
    }
    getHtml=function(){
            var table="<table style='width:100%;border: 4px black;border-style:ridge;text-align:center'><th>ФИО</th><th>Должность</th><th>Телефон</th><th>email</th>"
            for (let i=0;i<empArr.length;i++){
                table+="<tr>";
                    table+="<td>"+empArr[i].showName()+"</td>";
                    table+="<td>"+empArr[i].showRole()+"</td>";
                    table+="<td>"+empArr[i].showPhone()+"</td>";
                    table+="<td>"+empArr[i].showEmail()+"</td>";
                table+="</tr>";
            }
            table+="</table>"
           document.write(table); 
        }
    }
let table1=new EmpTable();
table1.getHtml();

let Zaycev=new Employee('Зайцев','Евгений','водитель','0505555005','zaycev@net');
empArr.push(Zaycev);//добавляю еще одного работника
table1.getHtml();

class StyledEmpTable extends EmpTable{
    constructor(size,b_color){
        super(empArr);
        this.size=size;
        this.backgroundColor=b_color;
        console.log(this.backgroundColor);
        console.log(this.size);
    }
    gethtml(){
            var table="<table style='width:100%;border: 4px black;border-style:ridge;text-align:center'><th>ФИО</th><th>Должность</th><th>Телефон</th><th>email</th>"
            for (let i=0;i<empArr.length;i++){
                table+=`<tr bgcolor="${this.backgroundColor}" height=${this.size}>`;
                    table+="<td >"+empArr[i].showName()+"</td>";
                    table+="<td>"+empArr[i].showRole()+"</td>";
                    table+="<td>"+empArr[i].showPhone()+"</td>";
                    table+="<td>"+empArr[i].showEmail()+"</td>";
                table+="</tr>";
            }
            table+="</table>"
           document.write(table); 
        }
}
let table2=new StyledEmpTable(55,'red');
table2.gethtml();
