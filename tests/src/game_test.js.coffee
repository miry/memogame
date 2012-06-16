module "GameTest",
  setup: () ->
    @subject = new Game

test "should create a new instance", () ->
  ok @subject, "Initialize a new instance of the Game"

test "should init difficult level for the game", () ->
  game = new Game 10
  equal game.difficult_level, 10 
