function triangleClassified(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não é triângulo!";
    }

    if (a === b && a === c) {
        return "equilátero";
    }

    if (a === b || a === c || b === c) {
        return "isósceles";
    }

    return "escaleno"
}

console.log(triangleClassified(4, 4, 6));
console.log(triangleClassified(3, 4, 5));
console.log(triangleClassified(4, 4, 4));
console.log(triangleClassified(4, 1, 1));
