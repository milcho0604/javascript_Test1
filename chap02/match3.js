let a = "list.jsp?pg=324&sz=15".match(/pg=([0-9]+)&sz=([0-9]+)/)

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a.index);