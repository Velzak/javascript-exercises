const repeatString = function(string, num) {
    let i;
    let word = '';
    if (num < 0) return 'ERROR'
    for (i = 0; i < num; i++){
        word += string;
    }
    return word
}

module.exports = repeatString
