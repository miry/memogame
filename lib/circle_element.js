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
