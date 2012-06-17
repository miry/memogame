(function() {

  window.Memogame = (function() {
    var init_game;

    function Memogame() {
      init_game();
    }

    init_game = function() {
      var elements, scope;
      scope = $('live_board');
      elements = [new CircleElement(scope, new CircleElement(scope, new CircleElement(scope, new CircleElement(scope))))];
      return new Game(elements);
    };

    return Memogame;

  })();

}).call(this);
