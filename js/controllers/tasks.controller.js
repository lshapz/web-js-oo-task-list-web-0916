'use strict';
// Tasks Controller
function TasksController(){


}

TasksController.prototype.init = function(){
  this.buttonStopper()
}


    TasksController.prototype.buttonStopper = function() { 
    var that = this
    $('#add_task').on('submit', function() {
        event.preventDefault(); 
        that.newTaskElement();
    })

  };  

  TasksController.prototype.newTaskElement = function() {
    var selection_list = $('select#select_list')
    var chosen = selection_list.val();
    // var div = $(`#${chosen}`)
    var list = $(`#list-${chosen}`)
    var item = document.createElement('li')
    var description = document.getElementById('task_description').value
    var priority =  document.getElementById('task_priority').value
      item.innerHTML = `${description}, ${priority}` 
      list.append(item)
    var task = new Task(description, priority, parseInt(chosen)) 




  }