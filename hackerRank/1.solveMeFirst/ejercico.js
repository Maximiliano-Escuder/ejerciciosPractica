let a = 7;
let b = 3;

function solveMeFirst(a, b) {
    if (a >= 1 && a <= 100 && b >= 1 && b <= 100) {
        return a + b
    } else {
        return "valores invalidos"
    }
}

let suma = solveMeFirst(a, b)

console.log(suma)