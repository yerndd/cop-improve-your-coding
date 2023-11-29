const calcType = {
    ADDITION: 'addition',
    SUBTRACTION: 'subtraction',
    MULTIPLICATION: 'multiplication',
    DIVISION: 'division',
    POWERS: 'powers'
}
 
function calculator(type, a, b) {
    switch (type) {
        case calcType.ADDITION:
            return addition(a, b)
        case calcType.SUBTRACTION:
            return subtraction(a, b)
        case calcType.MULTIPLICATION:
            return multiplication(a, b)
        case calcType.DIVISION:
            return division(a, b)
        case calcType.POWERS:
            return powers(a, b)
        default:
            return a
    }
}
 
function addition(a, b) {
    return a + b
}
 
function subtraction(a, b) {
    return a - b
}
 
function multiplication(a, b) {
    return a * b
}
 
function division(a, b) {
    return a / b
}
 
function powers(a, b) {
    return a ** b
}
 
console.log('2 + 4 =', calculator(calcType.ADDITION, 2, 4))
console.log('2 - 4 =', calculator(calcType.SUBTRACTION, 2, 4))
console.log('2 * 4 =', calculator(calcType.MULTIPLICATION, 2, 4))
console.log('2 / 4 =', calculator(calcType.DIVISION, 2, 4))
console.log('2 ^ 4 =', calculator(calcType.POWERS, 2, 4))