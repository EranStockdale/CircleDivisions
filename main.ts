function factorial(n: number, depth: number = Infinity): number {
    return n <= 1 ? 1 : n * factorial(n - 1)
}

function choose(n: number, k: number): number {
    return factorial(n) / (factorial(k) * factorial(n - k))
}

function divisions(pointCount: number): number {
    return 1 + choose(pointCount, 2) + choose(pointCount, 4)
}

let pointCount = 0;
while (pointCount < 10) {
    // console.log(`Factorial of ${pointCount}: ${factorial(pointCount)}`)
    console.log(divisions(pointCount))

    pointCount ++
}