(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Game = (function() {

    Game.defaults = {
      timeout: 400,
      dataKey: 'element-id'
    };

    function Game(elements, options) {
      var element, _i, _len, _ref;
      this.elements = elements;
      this.options = options;
      this.handleClickOnElement = __bind(this.handleClickOnElement, this);

      this.bindClickOnElement = __bind(this.bindClickOnElement, this);

      this.options = $.extend({}, Game.defaults, this.options);
      if (!this.elements || this.elements.length === 0) {
        this.elements = [];
      }
      this.reset();
      Round.defaults.timeout = this.options.timeout;
      _ref = this.elements;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        element = _ref[_i];
        this.bindClickOnElement(element);
      }
    }

    Game.prototype.start = function() {
      return this.play_round();
    };

    Game.prototype.play_round = function() {
      if (this.elements.length > 0) {
        return this.current_round = new Round(++this.level, this.elements);
      }
    };

    Game.prototype.game_over = function() {
      this.reset();
      if (typeof this.options.on_game_over === "function") {
        return this.options.on_game_over(this);
      }
    };

    Game.prototype.next_round = function() {
      var _this = this;
      return setTimeout(function() {
        if (typeof _this.options.on_success === "function") {
          _this.options.on_success(_this);
        }
        return _this.play_round();
      }, this.options.timeout);
    };

    Game.prototype.reset = function() {
      this.current_round = null;
      return this.level = 0;
    };

    Game.prototype.bindClickOnElement = function(element) {
      return element.onFire = this.handleClickOnElement;
    };

    Game.prototype.handleClickOnElement = function(event) {
      var $element, $target,
        _this = this;
      if (!this.current_round) {
        return;
      }
      $target = $(event.currentTarget);
      if (this.is_right_element($target)) {
        $element = this.current_round.route.shift();
        return $element.highlight(function() {
          if (_this.current_round.route.length === 0) {
            return _this.next_round();
          }
        });
      } else {
        return this.game_over();
      }
    };

    Game.prototype.is_right_element = function(target) {
      return this.current_round.route[0].item.data(this.options.dataKey) === target.data(this.options.dataKey);
    };

    return Game;

  })();

}).call(this);
