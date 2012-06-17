module "RoundTest",
  setup: () ->
    @subject = new Round 10, [new Element, new Element]

test "should create a new instance", () ->
  ok @subject, "Initialize a new instance of the Round"

test "should init difficult level for the game", () ->
  equal @subject.difficult_level, 10

test "should highlight elements and return indexes ones", () ->
  ok @subject.start(), "Start the round"
  equal @subject.route.length, 10, "The lenght of the route should equal to level number"
