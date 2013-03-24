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
