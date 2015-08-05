(function() {
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
      var i, len, ref, results, task;
      counter = parseInt(counter);
      ref = this.tasks;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        task = ref[i];
        if (task.counter === counter) {
          task.done = !task.done;
          if (task.done) {
            results.push($("#task-" + counter).addClass('done'));
          } else {
            results.push($("#task-" + counter).removeClass('done'));
          }
        } else {
          results.push(void 0);
        }
      }
      return results;
    },
    taskTag: function(title, taskCounter) {
      return Mustache.render(this.taskTemplate, {
        title: title,
        taskCounter: taskCounter
      });
    },
    bindClick: function(counter) {
      return $("#task-" + counter).click(function() {
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

}).call(this);
