var level1 = function(game){}
var character = null;
var end = null;
level1.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.game.add.sprite(0,0,"background1")
    this.platforms = this.add.physicsGroup();
    end = this.game.add.sprite(517,247,"nextlevel");
    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(end);
    this.game.physics.enable(character);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;
    this.platforms.create(200,365,"platform_i");
    this.platforms.create(647,340,"platform_ni");
    this.platforms.create(510,340,"platform_ni");
    
    this.platforms.create(440,340,"platform_ni");
    this.platforms.create(160,340,"platform_ni");
    this.platforms.create(60,340,"platform_ni");
    this.platforms.create(-10,340,"platform_ni");
    this.platforms.create(274,349, "right_f_wall");
    this.platforms.create(440,349, "left_f_wall");
    
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    cursors = this.game.input.keyboard.createCursorKeys();
   
  },
  update: function(){
    this.game.physics.arcade.collide(character, this.platforms);
    var finish = this.game.physics.arcade.overlap(character, end);
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
    if (character.y >= 325) {
      console.log("Died");
      character.x = 0;
      character.y = 0;
    }
    if (finish) {
      this.game.state.start("level2");
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
 