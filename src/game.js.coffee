class window.Game
  constructor: (@elements) ->

  start: () ->

  play_round: () ->
    round = new Round(1, @elements)

    round
