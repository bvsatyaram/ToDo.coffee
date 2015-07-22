TasksController =
  init: ->
    @.tasks = []
  add: (title) ->
    if $.trim(title)
      @.tasks.push(title)
      $('ul#tasks').append "<li><i class='fa fa-check-square-o'></i>#{title}</li>"

$ ->
  TasksController.init()
  $('#new-task').submit (ev) ->
    ev.preventDefault()
    TasksController.add $(@).find('input').val()
    @.reset()
    false