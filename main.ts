function divisions(pointCount: number): number {
    return  1 + 
            ((pointCount * (pointCount - 1)) / (2 * 1)) + 
            ((pointCount * (pointCount - 1) * (pointCount - 2) * (pointCount - 3)) / (4 * 3 * 2 * 1))
}

let pointCount = 1;
while (pointCount < 10) {
    // console.log(`Factorial of ${pointCount}: ${factorial(pointCount)}`)
    console.log(divisions(pointCount))

    pointCount ++
}