var level4 = function(game){}
var character = null;
var enemy = null;
var rocket = null; 
var heart1, heart2, heart3, heart4, heart5;
var reload;
var keyw,keyd,keya;
level4.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.add.sprite(0,0,"background4")
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    end = this.game.add.sprite(517,247,"nextlevel");
    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;

    enemy = this.game.add.sprite(600,0,"enemy");
    this.game.physics.enable(end);
    this.game.physics.enable(enemy);
    enemy.body.gravity.y = 1000;
    enemy.body.collideWorldBounds = true;
    
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
      
    if (health == 0) { this.game.state.start("level1");
    } else {
    
    if (health == 1) { heart2.kill(); heart3.kill(); heart4.kill(); heart5.kill(); }
    if (health == 2) { heart3.kill(); heart4.kill(); heart5.kill(); }
    if (health == 3) { heart4.kill(); heart5.kill(); }
    if (health == 4) { heart5.kill(); }
    }
    this.game.physics.arcade.collide(character, this.platforms);
    this.game.physics.arcade.collide(enemy, this.platforms);
    this.game.physics.arcade.collide(character, this.turret);
    
    var finish = this.game.physics.arcade.overlap(character, end);
    var touchrocket = this.game.physics.arcade.overlap(character, rocket);
    var touchpad = this.game.physics.arcade.overlap(character, this.jump_pad);
    var touchingenemy = this.game.physics.arcade.overlap(character, enemy);
    var standing = character.body.blocked.down || character.body.touching.down;

    if (finish) {
      this.game.state.start("level5");
    }
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


    console.log(health);
    if (enemy !== null) {
      if (character.x > enemy.x) {
        enemy.body.velocity.x = 100;
      } if (character.x < enemy.x) {
        enemy.body.velocity.x = -100;
      } if (touchingenemy) {
        character.x = 0;
        character.y = 0;
        health -= 1;
        if (health == 4) { 
          if (heart5.body) {heart5.kill();}
          console.log("deleted heart 5"); 
        }
        if (health == 3) {
          if (heart5.body) {heart5.kill();}
          if (heart4.body) {heart4.kill();}
          console.log("deleted heart 4"); 
        }
        if (health == 2) { 
          if (heart5.body) {heart5.kill();}
          if (heart4.body) {heart4.kill();}
          if (heart3.body) {heart3.kill();}
          console.log("deleted heart 3"); 
        }
        if (health == 1) { 
          if (heart5.body) { heart5.kill(); }
          if (heart4.body) {heart4.kill();}
          if (heart3.body) {heart3.kill();}
          if (heart2.body) {heart2.kill();}
          console.log("deleted heart 2"); 
        }
        if (health == 0) { this.game.state.start("level1"); }
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

