
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

module("GameTest", {
  setup: function() {
    return this.subject = new Game;
  }
});

test("should create a new instance", function() {
  return ok(this.subject, "Initialize a new instance of the Game");
});

test("should start a round with first level", function() {
  var game, round;
  game = new Game;
  round = game.play_round();
  return equal(round.difficult_level, 1, "First level");
});

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
