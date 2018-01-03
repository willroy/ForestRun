var preload = function(game){}

preload.prototype = {
  preload: function(){ 
    this.stage.backgroundColor = "#FFFFFF"
    var loadingBar = this.add.sprite(160,240,"loading");
    loadingBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(loadingBar);
    
    this.game.load.image('back', 'assets/menu/background.png');
    this.game.load.image('start', 'assets/menu/start.png');
    this.game.load.image('exit', 'assets/menu/exit.png');
    this.game.load.image('character', 'assets/character.png');
    this.game.load.image('enemy', 'assets/npcs/RightMonnew.png');
    this.game.load.image('platform_ni', 'assets/platforms/platformgrass.png');
    this.game.load.image('platform_i', 'assets/platforms/platform_i.png');
    this.game.load.image('right_f_wall', 'assets/platforms/WallFaceRight.png');
    this.game.load.image('left_f_wall', 'assets/platforms/WallFaceLeft.png');
    this.game.load.image('jump_pad', 'assets/jumppad.png');
    this.game.load.image('turret', 'assets/turret.png');
    this.game.load.image('rocket', 'assets/rocket.png');
    
    this.game.load.image('background1', 'assets/levelbackgrounds/background1.png');
    

  },
  create: function(){
    this.game.state.start("GameTitle");
  }
}