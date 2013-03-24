class window.Memogame
  constructor: ()->
    @game = init_game()

  init_game = () ->
    scope = $('live_board')
    elements = (new CircleElement(scope) for i in [0..4])
    new Game elements,
      success: (game)->
        alert("Round #{game.level+1}")

      game_over: (game)->
        alert("Game Over")
        if(confirm("Do you want try again?"))
          game.start()
