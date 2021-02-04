const students =[
    {id:22,name:"Omar Sunny"},
    {id:41 , name:"rahul khan"},
    {id:91 , name:"rahat khan"},
    {id:61 , name:"sayan khan"}
]
const names = students.map(s => s.name);
const ids =students.map(s => s.id);
const bigger =students.filter(s => s.id >40);
const biggerOne =students.find(s => s.id>40);
console.log(biggerOne);