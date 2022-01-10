import {
    PersonInterface
}from './PersonInterface';
class PersonDetail implements PersonInterface{
    first: string;
    last: string;
    getFullName(): string {
        return this.first+this.last;
    }
}
var p1=new PersonDetail();
p1.first="Harisha"
p1.last="Hanumanthu"
console.log(p1.getFullName());
