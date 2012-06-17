
module("RoundTest", {
  setup: function() {
    return this.subject = new Round(10, [new Element, new Element]);
  }
});

test("should create a new instance", function() {
  return ok(this.subject, "Initialize a new instance of the Round");
});

test("should init difficult level for the game", function() {
  return equal(this.subject.difficult_level, 10);
});

test("should highlight elements and return indexes ones", function() {
  ok(this.subject.start(), "Start the round");
  return equal(this.subject.route.length, 10, "The lenght of the route should equal to level number");
});
