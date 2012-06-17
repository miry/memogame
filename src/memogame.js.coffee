class window.Memogame
  constructor: ()->
    init_game()

  init_game = () ->
    scope = $('live_board')
    elements = [new CircleElement scope, new CircleElement scope, new CircleElement scope, new CircleElement scope]
    new Game elements
