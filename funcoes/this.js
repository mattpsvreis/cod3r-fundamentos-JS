// Adicionando funções à 'classes' com .prototype
Array.prototype.log = function(i) {
    if (i === undefined) {
        console.log(this)
    } else {
        console.log(this[i])
    }
}

Array.prototype.logLast = function() {
    console.log(this[this.length - 1])
}

Array.prototype.logFirst = function() {
    console.log(this[0])
}

const numbers = [1, 2, 3]

numbers.log()
numbers.log(0)
numbers.log(1)
numbers.log(2)

numbers.logFirst()
numbers.logLast()