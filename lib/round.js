(function() {

  window.Round = (function() {

    Round.defaults = {
      timeout: 400
    };

    function Round(difficult_level, elements, options) {
      this.difficult_level = difficult_level;
      this.elements = elements;
      this.options = options;
      this.options = $.extend({}, Round.defaults, this.options);
      this.route = [];
      this.start();
    }

    Round.prototype.start = function() {
      this.generate_route();
      return this.play();
    };

    Round.prototype.play = function() {
      var i, _i, _ref;
      this._queue = function() {
        return true;
      };
      for (i = _i = _ref = this.route.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; i = _ref <= 0 ? ++_i : --_i) {
        this.add_to_queue(this.route[i]);
      }
      return this._queue();
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

    Round.prototype.add_to_queue = function(element) {
      var _old_queue,
        _this = this;
      _old_queue = this._queue;
      return this._queue = function() {
        return setTimeout(function() {
          return element.highlight(function() {
            return _old_queue();
          });
        }, _this.options.timeout);
      };
    };

    return Round;

  })();

}).call(this);
