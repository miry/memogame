module "GameTest",
  setup: () ->
    @subject = new Game

test "should create a new instance", () ->
  ok @subject, "Initialize a new instance of the Game"

test "should start a round with first level", () ->
  game = new Game
  round = game.play_round()
  equal round.difficult_level, 1, "First level"


