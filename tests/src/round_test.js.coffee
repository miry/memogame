module "RoundTest",
  setup: () ->
    @subject = new Round

test "should create a new instance", () ->
  ok @subject, "Initialize a new instance of the Round"

test "should init difficult level for the game", () ->
  game = new Round 10, [new Element, new Element]
  equal game.difficult_level, 10

test "should highlight elements and return indexes ones", () ->
  game = new Round 10, [new Element, new Element]
  ok game.start(), "Start the round"
  equal game.route.length, 10, "The lenght of the route should equal to level number"
