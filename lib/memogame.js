(function() {

  window.Memogame = (function() {
    var init_game;

    function Memogame() {
      this.game = init_game();
    }

    init_game = function() {
      var elements, i, scope;
      scope = $('live_board');
      elements = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i <= 4; i = ++_i) {
          _results.push(new CircleElement(scope));
        }
        return _results;
      })();
      return new Game(elements, {
        on_success: function(game) {
          return alert("Round " + (game.level + 1));
        },
        on_game_over: function(game) {
          alert("Game Over");
          if (confirm("Do you want try again?")) {
            return game.start();
          }
        }
      });
    };

    return Memogame;

  })();

}).call(this);
