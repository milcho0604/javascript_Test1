let s = "one, two, three, four";
let a = s.split(/[\t ,]+/);   //구분_문자열을 기준으로 잘라서, 배열을 만들어서 리턴.

for(let i = 0; i<a.length; i++)
    console.log(a[i]);