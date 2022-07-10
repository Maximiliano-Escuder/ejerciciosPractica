let arrayA = []
let arrayB = []

function asignCalifications() {
    let a = []
    let b = []
    for (i = 0; i < 3; i++) {
        a.push(Math.round(Math.random() * 100))
        b.push(Math.round(Math.random() * 100))
    }
    arrayA = a
    arrayB = b
}

function compareTheTriplets(a, b) {
    let puntosAlice = 0;
    let puntosBob = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] == b[i]) {
            puntosAlice += 0;
            puntosBob += 0;
        } else if (a[i] > b[i]) {
            puntosAlice += 1;
        } else {
            puntosBob += 1
        }
    }
    let total = []
    total.push(puntosAlice)
    total.push(puntosBob)
    return total
}

asignCalifications()
let comparation = compareTheTriplets(arrayA, arrayB)

console.log(arrayA)
console.log(arrayB)
console.log(comparation)