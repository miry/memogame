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
module("GameTest", {
  setup: function() {
    return this.subject = new Game;
  }
});

test("should create a new instance", function() {
  return ok(this.subject, "Initialize a new instance of the Game");
});

test("should not start if there are no elements", function() {
  var game;

  game = new Game;
  equal(game.playRound(), void 0);
  return equal(game.currentRound, null);
});

test("should start a round with first level", function() {
  var game, round;

  game = new Game([new BaseElement()]);
  round = game.playRound();
  return equal(round.difficult_level, 1, "First level");
});
module("RoundTest", {
  setup: function() {
    return this.subject = new Round(10, [new BaseElement, new BaseElement]);
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
