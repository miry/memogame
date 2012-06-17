
module("RoundTest", {
  setup: function() {
    return this.subject = new Round;
  }
});

test("should create a new instance", function() {
  return ok(this.subject, "Initialize a new instance of the Round");
});

test("should init difficult level for the game", function() {
  var game;
  game = new Round(10, [new Element, new Element]);
  return equal(game.difficult_level, 10);
});

test("should highlight elements and return indexes ones", function() {
  var game;
  game = new Round(10, [new Element, new Element]);
  ok(game.start(), "Start the round");
  return equal(game.route.length, 10, "The lenght of the route should equal to level number");
});
