'use strict';
// Tasks Controller
function TasksController(){
  // this.$addTaskForm = $('#add_task');
  // this.$selectListMenu = $('#select_list');
  // this.$taskDescriptionInput = $('#task_description');
  // this.$taskPriorityInput = $('#task_priority');
  // this.$wrapper = $('#wrapper');
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
    var selection_list = $("[id='select_list']")
    var chosen = selection_list.val();
    // var div = $(`#${chosen}`)
    var list = $(`#list-${chosen}`)
    var item = document.createElement('li')
    var description = document.getElementById('task_description').value
    var button = document.createElement('button')
      button.innerHTML = "x"
      button.className = "destroy-task"
    var priority =  document.getElementById('task_priority').value
      item.innerHTML = `${description}, ${priority}` 
      list.append(item)
      item.prepend(button)
    var task = new Task(description, priority, parseInt(chosen)) 
      button.id = task.id
      item.id = `item${task.id}`
    this.deleteButton()
  }


  TasksController.prototype.deleteButton = function(){
    $('button.destroy-task').click(function(){
      event.preventDefault(); 
      $(`li#item${this.id}`).remove()
      //  var lists = store().lists
      //    var that = this
      //    function notMyId(element){
      //    return element['id'] !== parseInt(that.id)
      //    }
      // var new_list = lists.filter(notMyId) 
      var tasks = store().tasks
      var that = this
      // debugger
      // function notMyId(element){
      // }
      var new_tasks = tasks.filter(element => {return element['id'] !== parseInt(that.id)
}) 

      stores.push(Object.assign({}, {lists: store().lists, tasks: new_tasks}))
      // debugger
    })
  }


