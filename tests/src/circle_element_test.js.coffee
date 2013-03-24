module "CircleElementTest",
  setup: ()->
    @scope = $("board")

  teardown: ()->
    @scope.html("")

test "should add two circles", () ->
  new CircleElement(@scope)
  new CircleElement(@scope)
  equal @scope.find("element").length, 2, "Two elements in body"

test "should highlight an element", ()->
  element = new CircleElement(@scope)
  element.highlight()
  ok element.item.hasClass('highlight-element'), "Checking class highlight"
