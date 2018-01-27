var gameTitle = function(game){}

gameTitle.prototype = {
  create: function(){
    this.stage.backgroundColor = "#FFFFFF"
    this.game.add.sprite(0,0,"back");
    var playButton = this.game.add.button(315,170,"start",this.playTheGame,this);
  },
  
  playTheGame: function(){
    this.game.state.start("level4");
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
 
