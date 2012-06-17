(function() {

  window.Round = (function() {

    function Round(difficult_level, elements) {
      this.difficult_level = difficult_level;
      this.elements = elements;
      this.route = [];
    }

    Round.prototype.start = function() {
      this.generate_route();
      return this.play();
    };

    Round.prototype.play = function() {
      var element, _i, _len, _ref, _results;
      _ref = this.route;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        element = _ref[_i];
        _results.push(element.highlight());
      }
      return _results;
    };

    Round.prototype.generate_route = function() {
      var i;
      return this.route = (function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 0, _ref = this.difficult_level - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          _results.push(this.elements[Math.floor(Math.random() * this.elements.length)]);
        }
        return _results;
      }).call(this);
    };

    return Round;

  })();

}).call(this);
