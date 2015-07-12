Task =
  add: (title) ->
    $('ul#tasks').append "<li>#{title}</li>"

$ ->
  $('#new-task').submit (ev) ->
    ev.preventDefault()
    Task.add $(@).find('input').val()
    @.reset()
    false