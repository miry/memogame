(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.CircleElement = (function(_super) {

    __extends(CircleElement, _super);

    function CircleElement() {
      console.log(window.Element);
      console.log(this.__super__);
      console.log("CircleElement");
      CircleElement.__super__.constructor.call(this, arguments);
    }

    CircleElement.prototype.build = function() {
      console.log("CircleElement.constructor");
      console.log(this.scope);
      return this.scope.append($("<element class=\"" + this.options["class"] + " circle-element\" style=\"background-color: '#" + this.scope + "'\"></element>"));
    };

    return CircleElement;

  })(Element);

}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Element = (function() {
    var get_next_id,
      _this = this;

    Element.last_id = 0;

    Element.defaults = {
      "class": 'element',
      highlightClass: 'highlight-element'
    };

    function Element(scope, options) {
      this.scope = scope;
      this.options = options;
      this.id = get_next_id();
      this.options = $.extend({}, Element.defaults, this.options);
      this.build();
    }

    Element.prototype.highlight = function() {
      return true;
    };

    Element.prototype.build = function() {
      this.item = null;
      return true;
    };

    Element.prototype.onFire = function(func) {
      return true;
    };

    Element.prototype.onSuccess = function() {
      return true;
    };

    get_next_id = function() {
      return ++Element.last_id;
    };

    return Element;

  }).call(this);

  window.CircleElement = (function(_super) {

    __extends(CircleElement, _super);

    function CircleElement() {
      this.handleClick = __bind(this.handleClick, this);

      this.removeClassHighlight = __bind(this.removeClassHighlight, this);
      return CircleElement.__super__.constructor.apply(this, arguments);
    }

    CircleElement.prototype.build = function() {
      var color;
      color = Math.floor(Math.random() * 999);
      this.item = $("<element class=\"" + this.options["class"] + "\" style=\"background-color: #" + color + "\"></element>");
      this.item.data("element-id", this.id);
      this.item.click(this.handleClick);
      return this.scope.append(this.item);
    };

    CircleElement.prototype.highlight = function(onComplete) {
      var oldOnComplete,
        _this = this;
      if (typeof onComplete !== "function") {
        onComplete = function() {
          return _this.removeClassHighlight();
        };
      } else {
        oldOnComplete = onComplete;
        onComplete = function() {
          _this.removeClassHighlight();
          return oldOnComplete();
        };
      }
      this.item.toggleClass(this.options.highlightClass);
      return setTimeout(onComplete, 300);
    };

    CircleElement.prototype.removeClassHighlight = function() {
      return this.item.toggleClass(this.options.highlightClass);
    };

    CircleElement.prototype.handleClick = function(event) {
      return this.onFire(event);
    };

    return CircleElement;

  })(Element);

}).call(this);
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
