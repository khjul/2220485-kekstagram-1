function getRandomInt(left, right) {
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
//console.log(getRandomInt(2,1));

function checkMaxLenght(str, maxLenght){
  if(typeof str !== 'string') {
    str = String(str);
  }
  if(str.length <= maxLenght) {
    return true;
  }
  return false;
}
console.log(checkMaxLenght("qwerty", 6));
