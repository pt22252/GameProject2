// 2D Array แทนแผนที่พุ่มไม้ (1 = กำแพงพุ่มไม้, 0 = ทางเดิน)
const mazeMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const bushWidth = 163;
const bushHeight = 153;
const startX = 50;  // ตำแหน่งเริ่มต้นของกำแพง
const startY = 50;

function createMaze() {
    for (let row = 0; row < mazeMap.length; row++) {
        for (let col = 0; col < mazeMap[row].length; col++) {
            if (mazeMap[row][col] === 1) {
                let bush = new Sprite(game, "SpriteWallBush.png", 979, 153);
                bush.loadAnimation(979, 153, 163, 153);
                bush.generateAnimationCycles(SINGLE_ROW, 6);
                bush.setAnimationSpeed(700);
                bush.setPosition(startX + col * bushWidth, startY + row * bushHeight);
                bush.setSpeed(0, 0);
                bush.playAnimation();
                wallBushes.push(bush);
            }
        }
    }
}
