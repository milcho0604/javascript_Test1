// persons1 배열을 생성합니다. (personArray1.js와 동일한 방법)
const persons1 = [];
for (let i = 0; i < 10; i++) {
  const person = { name: "홍길동", age: 16 + i };
  persons1.push(person);
}

// persons2 배열을 복제합니다. (Deep Copy)
const persons2 = [];

for (const person of persons1) {
  const clonedPerson = { ...person }; // 객체 복제
  persons2.push(clonedPerson);
}

// persons2 배열을 출력합니다.
console.log("persons2 배열 (Deep Copy):");
console.log(persons2);
