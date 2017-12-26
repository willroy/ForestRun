var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
                this.stage.backgroundColor = "#FFFFFF"
		this.game.add.sprite(0,0,"back");
		var playButton = this.game.add.button(320,170,"start",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},

	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}