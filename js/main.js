function getRandomPositiveInt(left, right) {
  if (right === left){
    return left;
  }
  if (right < left) {
    left = left + right;
    right = left - right;
    left = left - right;
  }
  return Math.floor(Math.random() * (right - left + 1) + left);
}

function checkMaxLenght(testableStr, maxLenght){
  if(typeof testableStr !== 'string') {
    testableStr = String(testableStr);
  }
  return testableStr.length <= maxLenght;
}
checkMaxLenght('qw', 3);
getRandomPositiveInt(1,10);
