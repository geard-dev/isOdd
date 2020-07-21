const isOdd = function(number) {
    if (number % 2 == 0) {
        return(false)
    } else {
        return(true)
    }
}

module.exports = function(number){
    return isOdd(number);
}