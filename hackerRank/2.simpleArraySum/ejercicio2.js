function createArray(n) {
    let array = []
    for (i = 0; i < n; i++) {
        array.push(Math.random() * 10)
    }
    return array
}

function simpleArraySum(array) {
    let suma = 0
    for (i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}

let prueba = simpleArraySum(createArray(8))

console.log(prueba)