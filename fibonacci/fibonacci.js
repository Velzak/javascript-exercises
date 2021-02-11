const fibonacci = function(num) {
    if (Number(num) < 2){
        if( num < 0){
            return 'OOPS'
        } else {
            return Number(num)
        }
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

module.exports = fibonacci
