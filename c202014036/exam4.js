function createArray(count) {
    const result = [];
    const step = 0.1; 
    for (let i = 0; i < count; i++) {
        result.push(i * step);
    }

    return result;
}

console.log(createArray(2)); 
console.log(createArray(3)); 
console.log(createArray(4)); 
console.log(createArray(5)); 
