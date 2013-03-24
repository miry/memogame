class window.Game
  @defaults =
    timeout: 400
    dataKey: 'element-id'

  constructor: (@elements, options) ->
    @options = $.extend({}, Game.defaults, options)

    if(!@elements || @elements.length == 0)
      @elements = []

    @reset()

    Round.defaults.timeout = @options.timeout

    for element in @elements
      @bindClickOnElement element

  start: () ->
    @play_round()

  play_round: () ->
    if(@elements.length > 0)
      @currentRound = new Round ++@level, @elements

  game_over: () ->
    @reset()

    if(typeof(@options.game_over) == "function")
      @options.game_over(@)

  next_round: () ->
    setTimeout () =>
      if typeof(@options.success) == "function"
        @options.success(@)

      @play_round()
    , @options.timeout

  reset: () ->
    @currentRound = null
    @level = 0

  bindClickOnElement: (element) =>
    element.onFire = @handleClickOnElement

  handleClickOnElement: (event) =>
    return if(!@currentRound)

    $target = $(event.currentTarget)
    if(@is_right_element($target))
      $element = @currentRound.route.shift()
      $element.highlight ()=>
        if(@currentRound.route.length == 0)
          @next_round()

    else
      @game_over()

  is_right_element: (target) ->
    @currentRound.route[0].item.data(@options.dataKey) == target.data(@options.dataKey)