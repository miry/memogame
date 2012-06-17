class window.Round
  @defaults =
    timeout: 400

  constructor: (@difficult_level, @elements, @options) ->
    @options = $.extend({}, Round.defaults, @options)
    @route = []
    @start()

  start: () ->
    @generate_route()
    @play()

  play: () ->
    @_queue = () ->
      true

    @add_to_queue(@route[i]) for i in [@route.length-1..0]
    @_queue()

  generate_route: () ->
    @route = for i in [0..@difficult_level - 1]
      @elements[Math.floor(Math.random() * @elements.length)]

  add_to_queue: (element)->
    _old_queue = @_queue
    @_queue = ()=>
      setTimeout ()=>
        element.highlight ()->
          _old_queue()
      , @options.timeout

