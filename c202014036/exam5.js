function rotate(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const lastElement = arr.pop();
    arr.unshift(lastElement);
}

let a = [1, 2, 3, 4];

rotate(a);
console.log(a);

rotate(a);
console.log(a);
