module "BaseElementTest",
       setup: () ->
         @subject = new BaseElement()

test "should respond to to highlight", ()->
  ok @subject.highlight(), "there are no method highlight"

test "should increment id", ()->
  equal @subject.id, BaseElement.getLastId()
  element = new BaseElement()
  equal element.id, @subject.id + 1
