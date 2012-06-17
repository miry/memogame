module "ElementTest",
  setup: () ->
    @subject = new Element

test "should respond to to highlight", ()->
  ok @subject.highlight(), "there are no method highlight"


module "CircleElementTest",
  setup: ()->
    @scope = $("board")

  teardown: ()->
    @scope.html("")

test "should add two circles", () ->
  new CircleElement(@scope)
  new CircleElement(@scope)
  equal @scope.find("element").length, 2, "Two elements in body"

