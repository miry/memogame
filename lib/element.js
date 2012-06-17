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
