
class StudentAssignment{
    SID:number=12;
    SName:string="Harisha";
    SClass:number=5
    constructor(i:number,n:string,s:number){
           this.SID=i;
           this.SName=n;
            this.SClass=s;
           }
           display()
            {
                 console.log(this.SID);
                 console.log(this.SName);
                 console.log(this.SClass);
                  }}
                 var s1=new StudentAssignment(10,"Ashok",9);
                 s1.display();
                 var s2=new StudentAssignment(15,"Arjun",11);
                 s2.display();

