class window.Memogame
  @defaults =
    elements_count: 5
    scope: 'live_board'
    element_shape: 'circle'

  constructor: (options) ->
    @options = $.extend({}, Memogame.defaults, options)
    @options.scope = $(@options.scope)
    @initElements()
    @initGame()

  initElements: ->
    @elements = (new CircleElement(@options.scope) for i in [1..@options.elements_count])

  initGame: () ->
    @game = new Game @elements,

      start: (game) ->
        alert("Round 1")

      success: (game) ->
        alert("Round #{game.level+1}")

      game_over: (game)->
        alert("Game Over!")
        if(confirm("Do you want try again?"))
          game.start()
