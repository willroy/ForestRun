var preload = function(game){}

preload.prototype = {
  preload: function(){ 
    this.stage.backgroundColor = "#FFFFFF"
    
    this.game.load.image('start', 'assets/menu/start.png');
    this.game.load.image('character', 'assets/character/character.png');
    this.game.load.image('enemy', 'assets/npcs/RightMonnew.png');
    this.game.load.spritesheet('boss', 'assets/npcs/boss.png', 500,500, 14);

    this.game.load.image('jump_pad', 'assets/misc_objects/jumppad.png');
    this.game.load.image('turret', 'assets/misc_objects/turret.png');
    this.game.load.image('rocket', 'assets/misc_objects/rocket.png');
    this.game.load.image('heart', 'assets/character/heart.png');
    this.game.load.image('nextlevel', 'assets/misc_objects/end.png')

    this.game.load.image('platform_ni', 'assets/platforms/platformgrass.png');
    this.game.load.image('platform_test', 'assets/platforms/platform_ni.png');
    this.game.load.image('platform_i', 'assets/platforms/platform_i.png');
    this.game.load.image('right_f_wall', 'assets/platforms/WallFaceRight.png');
    this.game.load.image('left_f_wall', 'assets/platforms/WallFaceLeft.png');
    this.game.load.spritesheet('boss_platform', 'assets/platforms/SSbossplatform.png', 153, 40, 2);

    this.game.load.image('back', 'assets/menu/background.png');
    this.game.load.image('background1', 'assets/levelbackgrounds/backgroundl1.png');
    this.game.load.image('background2', 'assets/levelbackgrounds/backgroundl2.png');
    this.game.load.image('background3', 'assets/levelbackgrounds/backgroundl3.png');
    this.game.load.image('background4', 'assets/levelbackgrounds/backgroundl4.png');
    this.game.load.image('background5', 'assets/levelbackgrounds/backgroundl5.png');
    

  },
  create: function(){
    this.game.state.start("GameTitle");
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
 
