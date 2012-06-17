class window.Game
  @defaults =
    timeout: 400
    dataKey: 'element-id'

  constructor: (@elements, @options) ->
    @options = $.extend({}, Game.defaults, @options)
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
      @current_round = new Round(++@level, @elements)

  game_over: () ->
    @reset()

    if(typeof(@options.on_game_over) == "function")
      @options.on_game_over(@)


  next_round: () ->
    setTimeout ()=>
      if(typeof(@options.on_success) == "function")
        @options.on_success(@)

      @play_round()
    , @options.timeout

  reset: () ->
    @current_round = null
    @level = 0


  bindClickOnElement: (element) =>
    element.onFire= @handleClickOnElement


  handleClickOnElement: (event) =>
    return if(!@current_round)

    $target = $(event.currentTarget)
    if(@is_right_element($target))
      $element = @current_round.route.shift()
      $element.highlight ()=>
        if(@current_round.route.length == 0)
          @next_round()

    else
      @game_over()

  is_right_element: (target) ->
    @current_round.route[0].item.data(@options.dataKey) == target.data(@options.dataKey)