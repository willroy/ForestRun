var preload = function(game){}

preload.prototype = {
  preload: function(){ 
    this.stage.backgroundColor = "#FFFFFF"
    var loadingBar = this.add.sprite(160,240,"loading");
    loadingBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(loadingBar);
    
    this.game.load.image('back', 'assets/background.png');
    this.game.load.image('start', 'assets/start.png');
    this.game.load.image('exit', 'assets/exit.png');
    this.game.load.image('character', 'assets/character.png');
    this.game.load.image('platform_ni', 'assets/platformgrass.png');
    this.game.load.image('platform_i', 'assets/platform_i.png');
    this.game.load.image('jump_pad', 'assets/jumppad.png');
    this.game.load.image('turret', 'assets/turret.png');
    this.game.load.image('rocket', 'assets/rocket.png');
    this.game.load.image('enemy', 'assets/RightMon.png');

  },
  create: function(){
    this.game.state.start("GameTitle");
  }
}