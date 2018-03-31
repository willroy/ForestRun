var gameover = function(game){};

gameover.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.add.sprite(0,0,"backgameover");
    var playButton = this.game.add.button(315,170,"menubutton",this.playTheGame,this);
  },
  playTheGame: function(){
    this.game.state.start("Boot");
  }
}
