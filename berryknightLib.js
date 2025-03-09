function Knight() {
    tKnight = new Sprite(scene, "Sword_Run_full.png", 1201,801);
    tKnight.loadAnimation(1201, 801, 200, 200); //ขนาดของภาพและขนาดของแต่ละเฟรม
    tKnight.generateAnimationCycles(); //สร้างวงจรการเล่นเฟรม
    tKnight.renameCycles(new Array("down", "left", "right", "up")); //ชื่อของแต่ละเฟรมตั้งตามลำดับมูฟเม้นภาพ
    tKnight.setAnimationSpeed(100); //ความเร็วในการเล่นเฟรม
    tKnight.setPosition(400, 300);
    tKnight.checkKeys = function(){ //เช็คปุ่มที่กดเดิน
        if (keysDown[K_LEFT]){
            tKnight.setSpeed(5);
            tKnight.playAnimation()
            tKnight.setMoveAngle(270);
            tKnight.setCurrentCycle("left");
        }
        if (keysDown[K_RIGHT]){
            tKnight.setSpeed(5);
            tKnight.playAnimation()
            tKnight.setMoveAngle(90);
            tKnight.setCurrentCycle("right");
        }                
        if (keysDown[K_UP]){
            tKnight.setSpeed(5);
            tKnight.playAnimation()
            tKnight.setMoveAngle(0);
            tKnight.setCurrentCycle("up");
        }                
        if (keysDown[K_DOWN]){
            tKnight.setSpeed(5);
            tKnight.playAnimation()
            tKnight.setMoveAngle(180);
            tKnight.setCurrentCycle("down");
        }                
        
        if (keysDown[K_SPACE]){
            tKnight.setSpeed(0);
            tKnight.pauseAnimation();
            tKnight.setCurrentCycle("down");
        }
    }
    return tKnight;
} // end setupKnight