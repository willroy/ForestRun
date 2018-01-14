var level2 = function(game){}
var character = null;
var end = null;
var keyw,keyd,keya;
level2.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.add.sprite(0,0,"background2")
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    end = this.game.add.sprite(350,37,"nextlevel");
    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    this.game.physics.enable(end);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;
    
    this.jump_pad = this.add.physicsGroup();
    this.platforms = this.add.physicsGroup();
    this.platforms.create(650,300,"platform_ni");
    this.jump_pad.create(710,265, "jump_pad")
    this.platforms.create(510,330,"platform_ni");
    this.platforms.create(510,148,"platform_ni");
    this.platforms.create(440,330,"platform_ni");
    this.platforms.create(310,130,"platform_ni");
    this.platforms.create(180,465,"platform_ni");
    this.platforms.create(300,465,"platform_ni");
    this.jump_pad.create(310,430, "jump_pad")
    this.platforms.create(60,330,"platform_ni");
    this.platforms.create(-10,330,"platform_ni");
    this.platforms.create(175,339, "right_f_wall");
    this.platforms.create(440,339, "left_f_wall");
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    cursors = this.game.input.keyboard.createCursorKeys();
   
    keyw = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    keya = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    keyd = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
  },
  update: function(){
    this.game.physics.arcade.collide(character, this.platforms);
    var touchpad = this.game.physics.arcade.overlap(character, this.jump_pad);
    var finish = this.game.physics.arcade.overlap(character, end);
    var standing = character.body.blocked.down || character.body.touching.down;
    if (character.body) {
      character.body.velocity.x = 0;
    } if (keya.isDown || cursors.left.isDown) {
      character.body.velocity.x = -200;
    } if (keyd.isDown || cursors.right.isDown) {
      character.body.velocity.x = 200;
    } if (keyw.isDown && standing || cursors.up.isDown && standing) {
      character.body.velocity.y = -400;
    }
    if (touchpad) {
      character.body.velocity.y = -500;
      
    }
    if (finish) {
      this.game.state.start("level3");
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
 
