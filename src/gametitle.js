var gameTitle = function(game){}

gameTitle.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.add.sprite(0,0,"back");
    var playButton = this.game.add.button(235,170,"start",this.playTheGame,this);
    var exitButton = this.game.add.button(235,220,"exit",this.exitTheGame,this);
  },
  
  playTheGame: function(){
    this.game.state.start("level1");
  },
  exitTheGame: function(){
    this.playButton.destroy();
    this.exitButton.destroy();
    
  }
}