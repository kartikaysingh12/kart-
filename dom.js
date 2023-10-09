let myObj={
    name:"kartikey",
    age:25
};
let myObj_sort=JSON.stringify(myObj);
console.log(myObj_sort);
localStorage.setItem('myobj',myObj_sort);