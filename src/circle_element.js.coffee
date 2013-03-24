class window.CircleElement extends BaseElement
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
