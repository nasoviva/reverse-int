module.exports = function reverse (n) {
    let res = 0;
    let str = n.toString();
    let i = 1;
    let newStr = '';
    while (i <= str.length) {
        newStr = newStr + str[str.length - i]
        i++;
    }
    res = parseInt(newStr);
  return res;
}
