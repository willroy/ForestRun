var level3 = function(game){}
var character = null;
var enemy = null;
var rocket = null; 
var reload;
level3.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.add.sprite(0,0,"background3")
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    end = this.game.add.sprite(690,209,"nextlevel");
    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;
    
    this.turret = this.add.physicsGroup();
    this.rocket = this.add.physicsGroup();
    this.jump_pad = this.add.physicsGroup();
    this.platforms = this.add.physicsGroup();
    
    //rocket = this.rocket.create(430, 315, "rocket"); 
    //this.turret.create(430, 325, "turret");
    //this.platforms.create(480,200,"platform_ni");
    this.platforms.create(200,365,"platform_i");
    this.platforms.create(647,300,"platform_ni");
    this.platforms.create(510,340,"platform_ni");
    this.platforms.create(310,340,"platform_ni");
    this.platforms.create(270,340,"platform_ni");
    this.platforms.create(440,340,"platform_ni");
    this.platforms.create(130,300,"platform_ni");
    
    rocket = this.rocket.create(430, 315, "rocket"); 
    //this.platforms.create(60,340,"platform_ni");
    this.platforms.create(-10,340,"platform_ni");
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    this.turret.setAll('body.allowGravity', false);
    this.turret.setAll('body.immovable', true);
    cursors = this.game.input.keyboard.createCursorKeys();
    reload = 1;
   
  },
  update: function(){
    this.game.physics.arcade.collide(character, this.platforms);
    this.game.physics.arcade.collide(enemy, this.platforms);
    this.game.physics.arcade.collide(character, this.turret);
    var touchrocket = this.game.physics.arcade.overlap(character, rocket);
    var touchpad = this.game.physics.arcade.overlap(character, this.jump_pad);
    var standing = character.body.blocked.down || character.body.touching.down;
    
    if (character.body) {
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

    if (touchrocket) {
      console.log("Died");
      character.x = 0;
      character.y = 0;
    }
    
    if (rocket !== null) {
      reload += 1;
      rocket.body.velocity.x = -400;
      if (reload == 70) {
        rocket.kill(); 
        rocket = this.rocket.create(430, 315, "rocket"); 
        reload = 0;
      }
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
 