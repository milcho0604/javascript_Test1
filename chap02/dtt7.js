let i =3, j = 4;
let a = [5, 6, 7];

let a1 = [i, j, a];
console.log(a1);
console.log(a1.length); 

let a2 = [i, j, ...a];
console.log(a2);
console.log(a2.length);