
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
  equal(game.play_round(), void 0);
  return equal(game.current_round, null);
});

test("should start a round with first level", function() {
  var game, round;
  game = new Game([new Element]);
  round = game.play_round();
  return equal(round.difficult_level, 1, "First level");
});
