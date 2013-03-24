class window.BaseElement
  @lastId = 0
  @defaults =
    class: 'element'
    highlightClass: 'highlight-element'

  constructor: (@scope, options) ->
    @id = _nextId()
    @options = $.extend({}, BaseElement.defaults, options);
    @build()

  highlight: () ->
    true

  build: () ->
    @item = null
    true

  onFire: (func)->
    true

  onSuccess: ()->
    true

  @getLastId: ->
    @lastId

  _nextId = () =>
    ++@lastId
