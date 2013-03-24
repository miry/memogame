(function() {
  window.BaseElement = (function() {
    var _nextId,
      _this = this;

    BaseElement.lastId = 0;

    BaseElement.defaults = {
      "class": 'element',
      highlightClass: 'highlight-element'
    };

    function BaseElement(scope, options) {
      this.scope = scope;
      this.id = _nextId();
      this.options = $.extend({}, BaseElement.defaults, options);
      this.build();
    }

    BaseElement.prototype.highlight = function() {
      return true;
    };

    BaseElement.prototype.build = function() {
      this.item = null;
      return true;
    };

    BaseElement.prototype.onFire = function(func) {
      return true;
    };

    BaseElement.prototype.onSuccess = function() {
      return true;
    };

    BaseElement.getLastId = function() {
      return this.lastId;
    };

    _nextId = function() {
      return ++BaseElement.lastId;
    };

    return BaseElement;

  }).call(this);

}).call(this);
