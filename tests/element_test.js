
module("ElementTest", {
  setup: function() {
    return this.subject = new Element;
  }
});

test("should respond to to highlight", function() {
  return ok(this.subject.highlight(), "there are no method highlight");
});

module("CircleElementTest", {
  setup: function() {
    return this.scope = $("board");
  },
  teardown: function() {
    return this.scope.html("");
  }
});

test("should add two circles", function() {
  new CircleElement(this.scope);
  new CircleElement(this.scope);
  return equal(this.scope.find("element").length, 2, "Two elements in body");
});
