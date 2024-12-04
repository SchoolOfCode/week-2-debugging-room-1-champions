function countNumberOfNinesInNumber(number) {
  let count = 0;
  const numStr = number.toString();

  for (let i = 0; i < numStr.length; i++) {
    let digit = numStr[i];
    if (digit === "9") {
      count++;
    }
  }

  return Number(count);
}

console.log(countNumberOfNinesInNumber(989))