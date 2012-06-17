class window.Round
  constructor: (@difficult_level, @elements) ->
    @route = []

  start: () ->
    @generate_route()
    @play()

  play: () ->
    element.highlight() for element in @route

  generate_route: () ->
    @route = for i in [0..@difficult_level - 1]
      @elements[Math.floor(Math.random() * @elements.length)]