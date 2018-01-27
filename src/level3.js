var level3 = function(game){}
var character = null;
var enemy = null;
var rocket = null; 
var reload;
var health = 5;
var heart1, heart2, heart3, heart4, heart5;
var end;
var keyw,keyd,keya;
level3.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF";
    this.game.add.sprite(0,0,"background3");
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    end = this.game.add.sprite(690,209,"nextlevel");
    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    this.game.physics.enable(end);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;
    
    this.turret = this.add.physicsGroup();
    this.rocket = this.add.physicsGroup();
    this.jump_pad = this.add.physicsGroup();
    this.platforms = this.add.physicsGroup();
    
    heart1 = this.game.add.sprite(10,10,"heart");
    heart2 = this.game.add.sprite(20,10,"heart");
    heart3 = this.game.add.sprite(30,10,"heart");
    heart4 = this.game.add.sprite(40,10,"heart");
    heart5 = this.game.add.sprite(50,10,"heart");
    this.platforms.create(200,365,"platform_i");
    this.platforms.create(647,300,"platform_ni");
    this.platforms.create(510,340,"platform_ni");
    this.platforms.create(310,340,"platform_ni");
    this.platforms.create(270,340,"platform_ni");
    this.platforms.create(440,340,"platform_ni");
    this.platforms.create(130,300,"platform_ni");
    
    rocket = this.rocket.create(600, 300, "rocket"); 
    this.game.physics.enable(rocket);
    rocket.body.gravity.y = 2000;
    rocket.body.collideWorldBounds = true;
    this.platforms.create(-10,340,"platform_ni");
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    this.turret.setAll('body.allowGravity', false);
    this.turret.setAll('body.immovable', true);
    cursors = this.game.input.keyboard.createCursorKeys();
    keyw = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    keya = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    keyd = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    reload = 1;
   
    var health = 5
  },
  update: function(){
    this.game.physics.arcade.collide(character, this.platforms);
    this.game.physics.arcade.collide(rocket, this.platforms);
    this.game.physics.arcade.collide(enemy, this.platforms);
    this.game.physics.arcade.collide(character, this.turret);
    var touchrocket = this.game.physics.arcade.overlap(character, rocket);
    var touchpad = this.game.physics.arcade.overlap(character, this.jump_pad);
    var standing = character.body.blocked.down || character.body.touching.down;
    var finish = this.game.physics.arcade.overlap(character, end);


    if (character.body) {
      character.body.velocity.x = 0;
    } if (keya.isDown || cursors.left.isDown) {
      character.body.velocity.x = -200;
    } if (keyd.isDown || cursors.right.isDown) {
      character.body.velocity.x = 200;
    } if (keyw.isDown && standing || cursors.up.isDown && standing) {
      character.body.velocity.y = -400;
    }

    if (touchrocket) {
      console.log("Died");
      character.x = 0;
      character.y = 0;
      health -= 1;
      if (health == 4) { heart5.kill();console.log("deleted heart 5"); }
      if (health == 3) { heart4.kill();console.log("deleted heart 4"); }
      if (health == 2) { heart3.kill();console.log("deleted heart 3"); }
      if (health == 1) { heart2.kill();console.log("deleted heart 2"); }
      if (health == 0) { this.game.state.start("level1"); }
    }
    if (finish) {
      this.game.state.start("level4");
    }

    if (rocket !== null) {
      reload += 1;
      rocket.body.velocity.x = -200;
      if (rocket.body.touching.down) {
        rocket.body.velocity.y = -550;
      }
      this.game.physics.enable(rocket);
      rocket.body.gravity.y = 2000;
      rocket.body.collideWorldBounds = true;
      if (reload == 100) {
        rocket.kill(); 
      }
      if (reload == 140) {
        rocket = this.rocket.create(600,300, "rocket"); 
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
 
