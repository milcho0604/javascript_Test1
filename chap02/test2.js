function print(value) {
    if (typeof value === 'boolean') {
      console.log('boolean');
    } else if (typeof value === 'string') {
      console.log('string');
    } else {
      console.log('undefined');
    }
  }
  
  print(true);         // 출력: boolean
  print("hello world"); // 출력: string
  print();              // 출력: undefined
  