
module("GameTest", {
  setup: function() {
    return this.subject = new Game;
  }
});

test("should create a new instance", function() {
  return ok(this.subject, "Initialize a new instance of the Game");
});

test("should init difficult level for the game", function() {
  var game;
  game = new Game(10);
  return equal(game.difficult_level, 10);
});
