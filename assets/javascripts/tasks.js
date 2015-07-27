// Generated by CoffeeScript 1.4.0
var TasksController;

TasksController = {
  init: function() {
    this.tasks = [];
    this.taskTemplate = $('#task-template').html();
    return Mustache.parse(this.taskTemplate);
  },
  add: function(title) {
    var task;
    if ($.trim(title)) {
      task = {
        title: title,
        done: false,
        counter: this.tasks.length + 1
      };
      this.tasks.push(task);
      $('ul#tasks').append(this.taskTag(task.title, task.counter));
      return this.bindClick(task.counter);
    }
  },
  toggle: function(counter) {
    var task, _i, _len, _ref, _results;
    counter = parseInt(counter);
    _ref = this.tasks;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      task = _ref[_i];
      if (task.counter === counter) {
        task.done = !task.done;
        if (task.done) {
          _results.push($("#task-" + counter).addClass('done'));
        } else {
          _results.push($("#task-" + counter).removeClass('done'));
        }
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  },
  taskTag: function(title, taskCounter) {
    return Mustache.render(this.taskTemplate, {
      title: title,
      taskCounter: taskCounter
    });
  },
  bindClick: function(counter) {
    return $("#task-" + counter).click(function() {
      console.log("Clicked");
      return TasksController.toggle(parseInt(this.dataset.counter));
    });
  }
};

$(function() {
  TasksController.init();
  return $('#new-task').submit(function(ev) {
    ev.preventDefault();
    TasksController.add($(this).find('input').val());
    this.reset();
    return false;
  });
});
