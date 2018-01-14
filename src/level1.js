var level1 = function(game){}
var character = null;
var end = null;
var keyw,keyd,keya;
//Some variables for the character object, the end door object and level1
//function of the game class
level1.prototype = {
  //create function, this create all of the sprites to add to the game screen
  //as well as handling the physics engine startup and background image. (also
  //handles adding gravity and physcis to character sprite.)
  create: function(){
    //add background color to do behind main bakground image (in the case that
    //the image has transparant areas where not filled.)
    this.stage.backgroundColor = "#FFFFFF"
    //enable physics system (part of phaser language)
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    //add background image 
    this.game.add.sprite(0,0,"background1")
    //add a physics group for the platforms (a physics group is a group of
    //sprites that handle physics as a group configuration) 
    this.platforms = this.add.physicsGroup();
    //important end and character sprites (needed as variables because they re
    //needed for the update function.)
    end = this.game.add.sprite(517,247,"nextlevel");
    character = this.game.add.sprite(0,0,"character");
    character.frame = 1;
    //enable collisons for the end and character sprites.
    this.game.physics.enable(end);
    this.game.physics.enable(character);
    //enable gravity and collison with game boundaries for the character.
    character.body.gravity.y = 1000;
    character.body.collideWorldBounds = true;
    //create platforms with the image defined in the preload file (at a certain
    //loacation)
    this.platforms.create(200,365,"platform_i");
    this.platforms.create(647,340,"platform_ni");
    this.platforms.create(510,340,"platform_ni");
    
    this.platforms.create(440,340,"platform_ni");
    this.platforms.create(160,340,"platform_ni");
    this.platforms.create(60,340,"platform_ni");
    this.platforms.create(-10,340,"platform_ni");
    this.platforms.create(274,349, "right_f_wall");
    this.platforms.create(440,349, "left_f_wall");
    //stop gravity for the platforms and make it so nothing can move them. 
    this.platforms.setAll('body.allowGravity', false);
    this.platforms.setAll('body.immovable', true);
    //create a cursors varaible to get key press information in update
    //function.
    cursors = this.game.input.keyboard.createCursorKeys();
    keyw = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    keya = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    keyd = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
  },
  //handles level events, movement, collsion detection, health and end level
  //events
  update: function(){
    //add collsions for characters and platforms to allow player to use
    //platforms to get to places.
    this.game.physics.arcade.collide(character, this.platforms);
    //varaibles that give the output of true when collided will end (first) and
    //if touching ground (second)
    var finish = this.game.physics.arcade.overlap(character, end);
    var standing = character.body.blocked.down || character.body.touching.down;
    var direction;
    //if button push left or right, go in respective directions. if not
    //pressing anything, then stop movement.
    if (character.body) {
      character.body.velocity.x = 0;
     if (keyw.isDown && standing || cursors.up.isDown && standing) {
      if (direction = "right") {
        character.frame = 4;
      } if (direction = "left") {
        character.frame = 1; 
      }
      character.body.velocity.y = -400;
    } else if (keya.isDown || cursors.left.isDown) {
      character.body.velocity.x = -200;
      character.frame = 3;
      direction = "left";
    }  else if (keyd.isDown || cursors.right.isDown) {
      character.body.velocity.x = 200;
      character.frame = 2;
      direction = "right";
    } 
    } 
    //if character is at the level of the lava then the player has died.
    if (character.y >= 325) {
      console.log("Died");
      character.x = 0;
      character.y = 0;
    }
    //if touched door then go to the next level.
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
 
