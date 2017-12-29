var theGame = function(game){}
var character, rocket, reload;
theGame.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;
  
    this.turret = this.add.physicsGroup();
    this.rocket = this.add.physicsGroup();
    this.jump_pad = this.add.physicsGroup();
    this.platforms = this.add.physicsGroup();
    
    this.platforms.create(0,300,"platform_ni");
    this.jump_pad.create(200, 325, "jump_pad");
    this.platforms.create(270,200,"platform_ni");
    rocket = this.rocket.create(430, 325, "rocket"); 
    this.turret.create(430, 325, "turret");
    this.platforms.create(480,200,"platform_ni");
    
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    this.turret.setAll('body.allowGravity', false);
    this.turret.setAll('body.immovable', true);
    cursors = this.game.input.keyboard.createCursorKeys();
    reload = 1;
  },
  update: function(){
    this.game.physics.arcade.collide(character, this.platforms);
    this.game.physics.arcade.collide(character, this.turret);
    var touchpad = this.game.physics.arcade.overlap(character, this.jump_pad);
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
    if (touchpad) {
      character.body.velocity.y = -600;
      
    }
    
    reload += 1;
    rocket.body.velocity.y = -400
    if (reload == 70) {
      rocket.kill(); 
      rocket = this.rocket.create(430, 325, "rocket"); 
      reload = 0;
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
 