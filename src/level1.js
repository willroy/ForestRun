var level1 = function(game){}
var character = null;
var enemy = null;
var rocket = null; 
var reload;
level1.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    

    this.game.add.sprite(0,0,"background1")
    this.platforms = this.add.physicsGroup();
    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;
    
 
    this.platforms.create(200,215,"platform_i");
    this.platforms.create(510,200,"platform_ni");
    this.platforms.create(440,200,"platform_ni");
    this.platforms.create(160,200,"platform_ni");
    this.platforms.create(60,200,"platform_ni");
    this.platforms.create(-10,200,"platform_ni");
    this.platforms.create(274,209, "right_f_wall");
    this.platforms.create(440,209, "left_f_wall");
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    cursors = this.game.input.keyboard.createCursorKeys();
   
  },
  update: function(){
    this.game.physics.arcade.collide(character, this.platforms);
    //this.game.physics.arcade.collide(enemy, this.platforms);
    this.game.physics.arcade.collide(character, this.turret);
    //var touchrocket = this.game.physics.arcade.overlap(character, rocket);
    //var touchpad = this.game.physics.arcade.overlap(character, this.jump_pad);
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
      character.body.velocity.y = -400;
    }
  }
}
 //             _   _
 //            /\\_//\
 //           / o _ o \
 //          /_   X   _\
 //            \_____/
 //            /  o  \
 //           /       \__
 //           \_(_|_)___ \
 //                  (___/
 // By will Roy