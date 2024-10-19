/*
    Can you define a function that can figure out whether two rectangles are colliding?
    (Meaning they are either touching or overlapping)

    A "rectangle" is an object with four properties:
        x, y, w, and h
    x and y represent the coordinates of the rectangle's top-left corner.
    w and h represent the width and height.

    Bonus points: Throw an error if the arguments are not the correct data type.
*/


function isCollision(rect1, rect2) {
    // ⬇ Your code here ⬇
    
    // ⬆ Your code here ⬆
}


// TESTS
const rectangles = [
    {x: 50, y: 50, w: 25, h: 25},
    {x: 4, y: 7, w: 25, h: 25},
    {x: 63, y: 70, w: 25, h: 25},
    {x: 210, y: 184, w: 112, h: 78},
    {x: 261, y: 300, w: 45, h: 150},
    {x: 280, y: 170, w: 45, h: 25},
]

const testCases = [
    [0, 1, false],
    [1, 2, false],
    [0, 2, true],
    [2, 3, false],
    [3, 4, false],
    [3, 5, true],
    [4, 5, false]
]

testCases.forEach(([i, j, correctValue]) => {
    const result = isCollision(rectangles[i], rectangles[j]);
    const success = result === correctValue;
    console.log(`
        Tested isCollision(rectangles[${i}], rectangles[${j}]).
        Expected ${correctValue}, got ${result}.
        %c${success ? "Success! :)" : "Failed."}%c
    `, `background-color: ${success ? "green":"red"}; font-size: 16px;`)
})