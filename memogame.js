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
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Element = (function() {

    function Element(scope, options) {
      this.scope = scope;
      this.options = options;
      this.options = $.extend({
        "class": ''
      }, this.options);
      this.build();
    }

    Element.prototype.highlight = function() {
      return true;
    };

    Element.prototype.build = function() {
      return true;
    };

    return Element;

  })();

  window.CircleElement = (function(_super) {

    __extends(CircleElement, _super);

    function CircleElement() {
      return CircleElement.__super__.constructor.apply(this, arguments);
    }

    CircleElement.prototype.build = function() {
      var color;
      color = Math.floor(Math.random() * 999);
      this.item = $("<element class=\"" + this.options["class"] + " circle-element\" style=\"background-color: #" + color + "\"></element>");
      return this.scope.append(this.item);
    };

    CircleElement.prototype.highlight = function() {
      var removeclasshighlight,
        _this = this;
      this.item.addClass("highlight");
      removeclasshighlight = function() {
        return _this.item.removeClass("highlight");
      };
      setTimeout(removeclasshighlight, 400);
      return true;
    };

    return CircleElement;

  })(Element);

}).call(this);
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
