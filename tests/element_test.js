
module("ElementTest", {
  setup: function() {
    return this.subject = new Element;
  }
});

test("should respond to to highlight", function() {
  return ok(this.subject.highlight(), "there are no method highlight");
});

test("should increment id", function() {
  var element;
  equal(this.subject.id, Element.last_id);
  element = new Element;
  return equal(element.id, this.subject.id + 1);
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

test("should highlight an element", function() {
  var element;
  element = new CircleElement(this.scope);
  element.highlight();
  return ok(element.item.hasClass('highlight-element'), "Checking class highlight");
});
