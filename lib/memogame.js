(function() {
  window.Memogame = (function() {
    Memogame.defaults = {
      elements_count: 5,
      scope: 'live_board',
      element_shape: 'circle'
    };

    function Memogame(options) {
      this.options = $.extend({}, Memogame.defaults, options);
      this.options.scope = $(this.options.scope);
      this.initElements();
      this.initGame();
    }

    Memogame.prototype.initElements = function() {
      var i;

      return this.elements = (function() {
        var _i, _ref, _results;

        _results = [];
        for (i = _i = 1, _ref = this.options.elements_count; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
          _results.push(new CircleElement(this.options.scope));
        }
        return _results;
      }).call(this);
    };

    Memogame.prototype.initGame = function() {
      return this.game = new Game(this.elements, {
        start: function(game) {
          return alert("Round 1");
        },
        success: function(game) {
          return alert("Round " + (game.level + 1));
        },
        game_over: function(game) {
          alert("Game Over!");
          if (confirm("Do you want try again?")) {
            return game.start();
          }
        }
      });
    };

    return Memogame;

  })();

}).call(this);
