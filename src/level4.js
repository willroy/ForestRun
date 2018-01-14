var level4 = function(game){}
var character = null;
var enemy = null;
var rocket = null; 
var reload;
var keyw,keyd,keya;
level4.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.add.sprite(0,0,"background4")
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;

    enemy = this.game.add.sprite(600,0,"enemy");
    this.game.physics.enable(enemy);
    enemy.body.gravity.y = 1000;
    enemy.body.collideWorldBounds = true;
    
    this.turret = this.add.physicsGroup();
    this.rocket = this.add.physicsGroup();
    this.jump_pad = this.add.physicsGroup();
    this.platforms = this.add.physicsGroup();
    
    this.platforms.create(200,365,"platform_i");
    this.platforms.create(647,340,"platform_ni");
    this.platforms.create(510,340,"platform_ni");
    this.platforms.create(440,340,"platform_ni");
    this.platforms.create(160,340,"platform_ni");
    this.platforms.create(60,340,"platform_ni");
    this.platforms.create(-10,340,"platform_ni");
    this.platforms.create(280,340,"platform_ni");
    this.platforms.create(410,340,"platform_ni");
    this.platforms.create(100,300, "right_f_wall");
    this.platforms.create(700,300, "left_f_wall");

    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    this.turret.setAll('body.allowGravity', false);
    this.turret.setAll('body.immovable', true);
    cursors = this.game.input.keyboard.createCursorKeys();
    keyw = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    keya = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    keyd = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
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

    if (enemy !== null) {
      if (character.x > enemy.x) {
        enemy.body.velocity.x = 100;
      } if (character.x < enemy.x) {
        enemy.body.velocity.x = -100;
      } if (character.x+5 > enemy.x && character.x-5 < enemy.x) {
        enemy.body.velocity.x = 0;
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
 
