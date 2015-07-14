TasksController =
  init: ->
    @.tasks = []
  add: (title) ->
    @.tasks.push(title)
    $('ul#tasks').append "<li>#{title}</li>"

$ ->
  TasksController.init()
  $('#new-task').submit (ev) ->
    ev.preventDefault()
    TasksController.add $(@).find('input').val()
    @.reset()
    false