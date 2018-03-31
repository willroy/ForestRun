var gameTitle = function(game){}

gameTitle.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    back = this.game.add.sprite(0,0,"back");
    var playButton = this.game.add.button(315,170,"start",this.playTheGame,this);
    if (finished) {
      var label = this.game.add.text(300, 300, 'WELL DONE THANKS FOR PLAYING',{
           font: 'bold 34px Arial'
      });
      label.anchor.setTo(0.5, 0); 
      playButton.kill();
      back.kill(); 
    }
  },

  playTheGame: function(){
    this.game.state.start("level1");
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
 
