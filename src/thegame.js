var theGame = function(game){}
var character;
theGame.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    character.body.bounce.y = 0.2;
    character.body.gravity.y = 300;
    character.body.collideWorldBounds = true;
    cursors = this.game.input.keyboard.createCursorKeys();
  },
  update: function(){
    if (character.body) {
      console.log("Velocity: " + character.body.velocity);
      character.body.velocity.x = 0;
    }
    if (cursors.left.isDown) {
        character.body.velocity.x = -200;
    } 
     if (cursors.right.isDown) {
      character.body.velocity.x = 200;
    } 
    if (cursors.up.isDown) {
      character.body.velocity.y = -200;
    }
    //else {
    //  character.body.velocity.x = 0;
    //}
   
  },
  pressedRight: function(){
    this.tweenRight(true);
 }
}
