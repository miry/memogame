module("BaseElementTest", {
  setup: function() {
    return this.subject = new BaseElement();
  }
});

test("should respond to to highlight", function() {
  return ok(this.subject.highlight(), "there are no method highlight");
});

test("should increment id", function() {
  var element;

  equal(this.subject.id, BaseElement.getLastId());
  element = new BaseElement();
  return equal(element.id, this.subject.id + 1);
});
