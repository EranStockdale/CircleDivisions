function divisions(pointCount: number): number {
    return  1 + 
            ((pointCount * (pointCount - 1)) / (2 * 1)) + 
            ((pointCount * (pointCount - 1) * (pointCount - 2) * (pointCount - 3)) / (4 * 3 * 2 * 1))
}

let pointCount = 1;
while (pointCount <= 1000000) {
    // console.log(`Factorial of ${pointCount}: ${factorial(pointCount)}`)
    const divisionCount: number = divisions(pointCount)
    const isPowerOf2: boolean = (divisionCount & (divisionCount - 1)) == 0

    if (isPowerOf2)
        console.log(`Found a division that's a power of 2! ${divisionCount} with ${pointCount} points`)

    pointCount ++
}