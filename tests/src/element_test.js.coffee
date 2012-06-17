module "ElementTest",
  setup: () ->
    @subject = new Element

test "should respond to to highlight", ()->
  ok @subject.highlight(), "there are no method highlight"

test "should increment id", ()->
  equal @subject.id, Element.last_id
  element = new Element
  equal element.id, @subject.id + 1

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
