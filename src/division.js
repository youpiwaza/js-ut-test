function division(a, b) {
  if(b == 0) {
    throw '2nd parameter must different than 0';
  }
  else {
    return a / b;
  }
}
module.exports = division;
