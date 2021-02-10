const palindromes = function(arr) {
    arr = arr.toLowerCase().replace(/[^a-z0-9]+/g, '')
    return arr === arr.split('').reverse().join('')
}

module.exports = palindromes
