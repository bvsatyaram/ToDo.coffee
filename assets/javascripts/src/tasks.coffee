$ ->
  $('#new-task').submit (ev) ->
    ev.preventDefault()
    $('ul#tasks').append "<li>#{$(@).find('input').val()}</li>"
    @.reset()
    false