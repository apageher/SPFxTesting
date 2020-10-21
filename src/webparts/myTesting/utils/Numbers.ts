
export const suma = (a: number, b: number) => {
    return a + b
}

export const resta = (a: number, b: number) => {
    return a - b
}

export const division = (a: number, b: number) => {
    return a / b
}

export const multiplicacion = (a: number, b: number) => {
    return a * b
}

export const getRandomNum = (min: number, max: number) => {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}