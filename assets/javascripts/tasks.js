// Generated by CoffeeScript 1.4.0

$(function() {
  return $('#new-task').submit(function(ev) {
    ev.preventDefault();
    $('ul#tasks').append("<li>" + ($(this).find('input').val()) + "</li>");
    this.reset();
    return false;
  });
});