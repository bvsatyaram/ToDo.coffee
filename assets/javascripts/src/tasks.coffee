TasksController =
  init: ->
    @.tasks = []
    @.taskTemplate = $('#task-template').html()
    Mustache.parse(@.taskTemplate)
  add: (title) ->
    if $.trim(title)
      task =
        title:title
        done: false
        counter: @.tasks.length + 1
      @.tasks.push task
      $('ul#tasks').append @.taskTag(task.title, task.counter)
      @.bindClick(task.counter)
  toggle: (counter) ->
    counter = parseInt(counter)
    for task in @.tasks
      if task.counter == counter
        task.done = !task.done
        if task.done
          $("#task-#{counter}").addClass('done')
        else
          $("#task-#{counter}").removeClass('done')
  taskTag: (title, taskCounter) ->
    Mustache.render(@.taskTemplate, {title: title, taskCounter: taskCounter})
  bindClick: (counter) ->
    $("#task-#{counter}").click ->
      TasksController.toggle(parseInt(@.dataset.counter))

$ ->
  TasksController.init()
  $('#new-task').submit (ev) ->
    ev.preventDefault()
    TasksController.add $(@).find('input').val()
    @.reset()
    false
