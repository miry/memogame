class window.Element
  constructor: (@scope, @options) ->
    @options = $.extend({"class": ''}, @options);
    @build()

  highlight: () ->
    true

  build: () ->
    true


class window.CircleElement extends Element
  build: ()->
    color = Math.floor(Math.random() * 999)
    @item = $("<element class=\"#{@options.class} circle-element\" style=\"background-color: ##{color}\"></element>")
    @scope.append @item

  highlight: ()->
    @item.addClass("highlight")

    removeclasshighlight = ()=>
      @item.removeClass("highlight")

    setTimeout removeclasshighlight, 400

    true

  