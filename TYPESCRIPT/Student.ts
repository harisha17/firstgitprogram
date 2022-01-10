export class Student{
    stdID:number=21261;
    stdName:string="harisha";
    stdSal:number=25000
    constructor(i:number ,n:string,s:number)
    {
        this.stdID=i;
        this.stdName=n;
        this.stdSal=s;

    }
    display(){
        console.log(this.stdID);
        console.log(this.stdName);
        console.log(this.stdSal);
    }
}
var e1=new Student(21261,"harisha",2600);
e1.display();