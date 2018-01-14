var level5 = function(game){}
var start;
var character = null;
var rocket,rocket2,rocket3;
var boss = null;
var attackcounter = 0;
var keyw,keyd,keya;
level5.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF";
    this.game.add.sprite(0,0,"background5");
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    boss = this.game.add.sprite(150,-600,"boss");
    boss.animations.add("idle",[0,1,2,3,4,5,6,7,8,9,10,11,12,13]);
    this.game.physics.enable(boss);

    //end = this.game.add.sprite(690,209,"nextlevel");

    character = this.game.add.sprite(0,0,"character");
    this.game.physics.enable(character);
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;

    this.platforms = this.add.physicsGroup();
    this.rocket = this.add.physicsGroup(); 

    platform1 = this.game.add.sprite(0,340,"platform_ni");
    this.game.physics.enable(platform1);
    platform1.body.immovable = true;

    platform2 = this.game.add.sprite(210,340,"platform_ni");
    this.game.physics.enable(platform2);
    platform2.body.immovable = true;

    platform3 = this.game.add.sprite(420,340,"platform_ni");
    this.game.physics.enable(platform3);
    platform3.body.immovable = true;

    platform4 = this.game.add.sprite(630,340,"platform_ni");
    this.game.physics.enable(platform4);
    platform4.body.immovable = true;

    cursors = this.game.input.keyboard.createCursorKeys();
    keyw = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    keya = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    keyd = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    reload = 1;

  },
  update: function(){
    this.game.physics.arcade.collide(character, platform1);
    this.game.physics.arcade.collide(character, platform3);
    this.game.physics.arcade.collide(character, platform4);
    this.game.physics.arcade.collide(character, this.turret);
    started_battle = this.game.physics.arcade.collide(character, platform2);
    var standing = character.body.blocked.down || character.body.touching.down;
    var touchrocket = this.game.physics.arcade.overlap(character, rocket);
    var touchrocket2 = this.game.physics.arcade.overlap(character, rocket2);
    var touchrocket3 = this.game.physics.arcade.overlap(character, rocket3);
    var finish = this.game.physics.arcade.overlap(character, end);

    if (start){attackcounter += 1;}
    if (started_battle) {start = true;}

    if (attackcounter >= 1) {
      boss.body.velocity.y = 0;
      if (attackcounter <= 80) {
        boss.body.velocity.y = 400;
      }
    } 
    
    if (attackcounter == 80) {
      boss.animations.play("idle", 10, true);
    }

    if (attackcounter == 100){
      rocket = this.rocket.create(170,300, "rocket"); 
      rocket2 = this.rocket.create(380,300,"rocket");
      rocket3 = this.rocket.create(620,300,"rocket");
      this.game.physics.enable(rocket);
      rocket.body.collideWorldBounds = true;
      if (rocket !== null) {
        reload += 1;
        rocket.body.velocity.y = -700;
        this.game.physics.enable(rocket);
        rocket.body.gravity.y = 1000 ;
        rocket.body.collideWorldBounds = true;
      }
      if (rocket2 !== null) {
        reload += 1;
        rocket2.body.velocity.y = -700;
        this.game.physics.enable(rocket2);
        rocket2.body.gravity.y = 1000 ;
        rocket2.body.collideWorldBounds = true;
      }
      if (rocket3 !== null) {
        reload += 1;
        rocket3.body.velocity.y = -700;
        this.game.physics.enable(rocket3);
        rocket3.body.gravity.y = 1000 ;
        rocket3.body.collideWorldBounds = true;
      }
    }
    if (touchrocket || touchrocket2 || touchrocket3) {
      console.log("Died");
      character.x = 0;
      character.y = 0;
      health -= 1;
    }
   if (attackcounter == 190) {
      rocket.kill(); 
      rocket2.kill(); 
      rocket3.kill(); 
   }


    if (character.y >= 325) {
      console.log("Died");
      character.x = 0;
      character.y = 0;
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


    if (finish) {
      this.game.state.start("level4");
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
 
