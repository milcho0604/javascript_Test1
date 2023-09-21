let s = "hello world";

for(let i = 0; i< s.length; i++)
    console.log("%s %s %d", s[i], s.charAt(i), s.charCodeAt(i));
// 문자열 위치의 문자를 리턴 = charAt
// 문자열 위치의 코드 값을 리턴 = charCodeAt