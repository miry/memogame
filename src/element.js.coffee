class window.Element
  @last_id = 0
  @defaults =
    class: 'element'
    highlightClass: 'highlight-element'

  constructor: (@scope, @options) ->
    @id = get_next_id()

    @options = $.extend({}, Element.defaults, @options);
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

  get_next_id = () =>
    ++@last_id

class window.CircleElement extends Element
  build: ()->
    color = Math.floor(Math.random() * 999)
    @item = $("<element class=\"#{@options.class}\" style=\"background-color: ##{color}\"></element>")
    @item.data("element-id", @id)
    @item.click @handleClick
    @scope.append @item

  highlight: (onComplete)->
    if(typeof(onComplete) != "function")
      onComplete = ()=>
        @removeClassHighlight()
    else
      oldOnComplete = onComplete
      onComplete = ()=>
        @removeClassHighlight()
        oldOnComplete()

    @item.toggleClass(@options.highlightClass)
    setTimeout onComplete, 300

  removeClassHighlight: ()=>
    @item.toggleClass(@options.highlightClass)

  handleClick: (event)=>
    @onFire(event)

