TasksController =
  init: ->
    @.tasks = []
    @.taskTemplate = $('#task-template').html()
    Mustache.parse(@.taskTemplate)
  add: (title) ->
    taskCounter = @.tasks.length + 1
    if $.trim(title)
      @.tasks.push
        title:title
        done: false
        counter: taskCounter
      $('ul#tasks').append @.taskTag(title, taskCounter)
  taskTag: (title, taskCounter) ->
    Mustache.render(@.taskTemplate, {title: title, taskCounter: taskCounter})

$ ->
  TasksController.init()
  $('#new-task').submit (ev) ->
    ev.preventDefault()
    TasksController.add $(@).find('input').val()
    @.reset()
    false