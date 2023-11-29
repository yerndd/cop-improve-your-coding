const calc = () => {
  const addition = (a, b) => {
        return a + b
    }
 
    const subtraction = (a, b) => {
        return a - b
    }
 
    const multiplication = (a, b) => {
        return a * b
    }
 
    const division = (a, b) => {
        return a / b
    }
 
    const powers = (a, b) => {
        return a ** b
    }
 
    return { addition, subtraction, multiplication, division, powers }
}
 
console.log('2 + 4 =', calc.addition(2, 4))
console.log('2 - 4 =', calc.subtraction(2, 4))
console.log('2 * 4 =', calc.multiplication(2, 4))
console.log('2 / 4 =', calc.division(2, 4))
console.log('2 ^ 4 =', calc.powers(2, 4))