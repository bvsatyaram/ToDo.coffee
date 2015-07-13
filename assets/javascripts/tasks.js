// Generated by CoffeeScript 1.4.0
var TasksController;

TasksController = {
  init: function() {
    return this.tasks = [];
  },
  add: function(title) {
    this.tasks.push(title);
    return $('ul#tasks').append("<li>" + title + "</li>");
  }
};

$(function() {
  return $('#new-task').submit(function(ev) {
    ev.preventDefault();
    TasksController.add($(this).find('input').val());
    this.reset();
    return false;
  });
});
