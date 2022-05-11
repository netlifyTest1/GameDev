'use strict'
const Game = new Phaser.Game(800, 800, Phaser.AUTO, 'game-canvas', { preload, create, update })
let ball;
let mouse;
let brick, bricks;
function preload() {
Game.load.image('mouse', 'images/platform.png');
Game.load.image('ball', 'images/ball.png');
Game.load.image('brick','images/brick.png')
 
let a = [];
let person = {name: 'Ivan', age: 23, height: 180};
 
}
 
function create() {
    bricks = Game.add.group();
    bricks.enableBody = true;
 
    let i
    for(i=0; i<35; i=i+1){
        let yCoordinates = parseInt(i%5)
        let xCoordinates = parseInt(i%7)

        brick = Game.add.sprite(170 + xCoordinates*75, 100 + yCoordinates*40, 'brick');
        bricks.add(brick);

        brick.body.immovable = true;

        brick.scale.setTo(0.25);
        brick.anchor.setTo(0.5);
    }
 
 
    mouse = Game.add.sprite(400, 600, 'mouse');
    Game.physics.enable(mouse, Phaser.Physics.ARCADE);
    mouse.scale.setTo(0.5)
    mouse.anchor.setTo(0.5)
    mouse.body.collideWorldBounds = true;
    mouse.body.immovable = true;
 
 
    //Game.physics.startSystem(Phaser.Physics.ARCADE);
 
 
    ball = Game.add.sprite(400, 300, 'ball');
 
    Game.physics.enable(ball, Phaser.Physics.ARCADE);
 
    //  This gets it moving
    ball.body.velocity.setTo(400, 500);
    
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);
    ball.scale.setTo(0.02, 0.02)
 
 }
 
function update() {
    Game.physics.arcade.collide(mouse, ball)
    Game.physics.arcade.collide(ball, bricks, onHitBricks)
 
 
    if (Game.input.mousePointer.isUp)
    {
        Game.physics.arcade.moveToXY(mouse, Game.input.x, 600, 500, 0);
        if (Game.input.x > mouse.x - mouse.width/2 && Game.input.x < mouse.x + mouse.width/2)
        {
            mouse.body.velocity.setTo(0, 0);
        }
    }
    else
    {
        mouse.body.velocity.setTo(0, 0);
    }
 
}
function onHitBricks(ball, br){
  br.kill()
  debugger
}