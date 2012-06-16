
window.Game = (function() {

  function Game(difficult_level) {
    this.difficult_level = difficult_level;
  }

  return Game;

})();
var Memogame;

Memogame = (function() {
  var init_game;

  function Memogame() {
    this.init_game();
  }

  init_game = function() {
    return new Game;
  };

  return Memogame;

})();
