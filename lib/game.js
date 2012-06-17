(function() {

  window.Game = (function() {

    function Game(elements) {
      this.elements = elements;
    }

    Game.prototype.start = function() {};

    Game.prototype.play_round = function() {
      var round;
      round = new Round(1, this.elements);
      return round;
    };

    return Game;

  })();

}).call(this);
