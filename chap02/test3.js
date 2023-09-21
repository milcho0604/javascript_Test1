function dice() {
  // 1부터 6까지의 랜덤한 정수를 생성하려면 Math.random() 함수를 사용합니다.
  // Math.random()은 0 이상 1 미만의 난수를 생성합니다.
  // 따라서 0에서 1을 곱하고 1을 더하여 1에서 2 사이의 난수를 얻은 후,
  // 정수로 변환하고 1을 뺌으로써 1에서 6 사이의 난수를 얻을 수 있습니다.
  return Math.floor(Math.random() * 6) + 1;
}

for (let i = 0; i < 10; ++i) {
  console.log(dice());
}
