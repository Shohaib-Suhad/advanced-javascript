const hero =[];

const student =[
  {id:22, name: 'sakib'},
  {id:24, name: 'mannnaaa'} ,
  { id:26, name: 'dipjol'}, 
  {id:28, name: 'sarika'} 
  ]
  // for (let i = 0; i < student.length; i++) {
  //   const element = student[i];
  //   const result = element.name;
  //   hero.push(result);
    
  // }
  const names = student.map(s => s.name) ;
  const ids = student.map(s => s.id) ;
  const begger = student.filter ( x => x.name>25 )
  const beggerOn = student.find ( x => x.id>20 )
  console.log(names);
  console.log(ids);
  console.log(begger);
  console.log(beggerOn);