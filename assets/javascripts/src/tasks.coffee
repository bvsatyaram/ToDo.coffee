TasksController =
  init: ->
    @.tasks = []
    @.taskTemplate = $('#task-template').html()
    Mustache.parse(@.taskTemplate)
  add: (title) ->
    if $.trim(title)
      @.tasks.push(title)
      $('ul#tasks').append @.taskTag(title)
  taskTag: (title) ->
    Mustache.render(@.taskTemplate, {title: title})

$ ->
  TasksController.init()
  $('#new-task').submit (ev) ->
    ev.preventDefault()
    TasksController.add $(@).find('input').val()
    @.reset()
    false