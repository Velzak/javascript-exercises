const ftoc = function(temp) {
  temp = (temp - 32) * (5 / 9);
  let rounded = Math.round(temp * 10) / 10;
  temp = rounded;
  return temp;
}

const ctof = function(temp) {
  temp = temp * (9 / 5) + 32;
  let rounded = Math.round(temp * 10) / 10
  temp = rounded
  return temp;
}

module.exports = {
  ftoc,
  ctof
}
