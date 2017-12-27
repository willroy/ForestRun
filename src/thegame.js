var theGame = function(game){}
var character;
var platform;
theGame.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    character = this.game.add.sprite(0,0,"character");
    this.platforms = this.add.physicsGroup();
    this.platforms.create(0,200,"platform_i");
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    this.game.physics.enable(character);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    character.body.bounce.y = 0.2;
    character.body.gravity.y = 700;
    character.body.collideWorldBounds = true;
    cursors = this.game.input.keyboard.createCursorKeys();
  },
  update: function(){
    this.game.physics.arcade.collide(character, this.platforms);
    var standing = character.body.blocked.down || character.body.touching.down;
    if (character.body) {
      //console.log("Velocity: " + character.body.velocity);
      character.body.velocity.x = 0;
    }
    if (cursors.left.isDown) {
        character.body.velocity.x = -200;
    } 
     if (cursors.right.isDown) {
      character.body.velocity.x = 200;
    } 
    if (cursors.up.isDown && standing) {
      character.body.velocity.y = -200;
    }
   
  }
}
