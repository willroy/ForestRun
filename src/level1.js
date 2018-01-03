var theGame = function(game){}
var character = null;
var enemy = null;
var rocket = null; 
var reload;
theGame.prototype = {
  level1_create: function() {
     
  },
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.add.sprite(0,0,"background1")
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;
    
    this.turret = this.add.physicsGroup();
    this.rocket = this.add.physicsGroup();
    this.jump_pad = this.add.physicsGroup();
    this.platforms = this.add.physicsGroup();
    
    //this.platforms.create(0,300,"platform_ni");
    //this.jump_pad.create(200, 325, "jump_pad");
    //this.platforms.create(270,200,"platform_ni");
    //rocket = this.rocket.create(430, 315, "rocket"); 
    //this.turret.create(430, 325, "turret");
    //this.platforms.create(480,200,"platform_ni");
    this.platforms.create(510,200,"platform_ni");
    this.platforms.create(440,200,"platform_ni");
    this.platforms.create(160,200,"platform_ni");
    this.platforms.create(60,200,"platform_ni");
    this.platforms.create(-10,200,"platform_ni");
    this.platforms.create(274,209, "right_f_wall");
    this.platforms.create(440,209, "left_f_wall");
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
    if (touchrocket) {
      console.log("Died");
      character.x = 0;
      character.y = 0;
    }
    if (enemy !== null) {
      if (character.x > enemy.x) {
        enemy.body.velocity.x = 100;
      } if (character.x < enemy.x) {
        enemy.body.velocity.x = -100;
      } if (character.x+10 > enemy.x && character.x-10 < enemy.x) {
        enemy.body.velocity.x = 0;
      }
    }
    
    if (rocket !== null) {
      reload += 1;
      rocket.body.velocity.y = -400;
      if (reload == 70) {
        rocket.kill(); 
        rocket = this.rocket.create(430, 315, "rocket"); 
        reload = 0;
      }
    }
  },
  level1_update: function() {
    
  }
}

//var level1;

//function read_level() {
//    readFiles('levels').then(files => {
//    console.log( "loaded ", files.length );
//    files.forEach( (item, index) => {
//        console.log( "item",index, "size ", item.contents.length); });
//})
//
//construct_level: function() {
//}



 //             _   _
 //            /\\_//\
 //           / o _ o \
 //          /_   X   _\
 //            \_____/
 //            /  o  \
 //           /       \__
 //           \_(_|_)___ \
 //                  (___/
 