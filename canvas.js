function* createColorGenerator() {
    let hue = 0;
    while (true) {
        hue += 60;
        if (hue > 359) hue -= 359;
        yield `hsl(${hue}, 75%, 40%)`;
    }
}

const colorGenerator = createColorGenerator();
const canvas = document.getElementById("rectangle-canvas")
const ctx = canvas.getContext("2d")
rectangles.forEach((rect, i) => {
    ctx.fillStyle = colorGenerator.next().value;
    ctx.beginPath()
    ctx.rect(rect.x, rect.y, rect.w, rect.h)
    ctx.fill()
    ctx.font = "14px monospace";
    ctx.fillStyle = "white";
    ctx.fillText(i, rect.x+5, rect.y+16);
})