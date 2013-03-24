module "GameTest",
  setup: () ->
    @subject = new Game

test "should create a new instance", () ->
  ok @subject, "Initialize a new instance of the Game"

test "should not start if there are no elements", ()->
  game = new Game
  equal game.play_round(), undefined
  equal game.currentRound, null

test "should start a round with first level", () ->
  game = new Game [new BaseElement()]
  round = game.play_round()
  equal round.difficult_level, 1, "First level"


