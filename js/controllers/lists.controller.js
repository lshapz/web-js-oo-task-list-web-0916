'use strict';
// Lists Controller
function ListsController(){
  this.$addListForm = $('#add_list');
  this.$listTitleInput = $('#list_title');
  this.$selectListMenu = $('#select_list');
  this.$addTaskForm = $('#add_task');
  this.$wrapper = $('#wrapper');
};

    ListsController.prototype.buttonStopper = function() { 
    var that = this
    $('#add_list').on('submit', function() {
        event.preventDefault(); 
        that.newListTitle();
    })
   
  };  

  ListsController.prototype.newListTitle = function() {
    //if ($('#lists').children().length === 0){
    $('#lists').append('<div class="list">')
    //}

    var dom_title = document.getElementsByClassName('list')
    var new_one = dom_title[(dom_title.length-1)]
    var listtitle = document.getElementById('list_title').value
    var h2 = document.createElement('h2')
      h2.innerHTML = listtitle
    var button = document.createElement('button')
      button.innerHTML = "x"
      button.className = "destroy-list"
      
      new_one.appendChild(h2)
      new_one.appendChild(button)
    var list = new List(listtitle) 

    var ul = document.createElement('ul')
      ul.id = `list-${list.id}` 
      button.id = list.id
      new_one.id = `div${list.id}`

      new_one.appendChild(ul)

    var selection = document.getElementById('select_list')
    var option = document.createElement("option")
      option.id = list.id 
      option.value = list.id 
      option.innerHTML = listtitle
    selection.add(option)
    this.deleteButton()

    // debugger
}


  ListsController.prototype.deleteButton = function(){
    $('button.destroy-list').click(function(){
      event.preventDefault(); 
      $(`div#div${this.id}`).remove()
      $(`option#${this.id}`).remove()
       var lists = store().lists
         var that = this
         function notMyId(element){
         return element['id'] !== parseInt(that.id)
         }
      var new_list = lists.filter(notMyId) 
      var tasks = store().tasks
      var that = this
      function notMyList(element){
        return element['list_id'] !== parseInt(that.id)
      }
      var new_tasks = tasks.filter(notMyList) 

      stores.push(Object.assign({}, {lists: new_list, tasks: new_tasks}))
      // debugger
    })
  }


ListsController.prototype.init = function(){
  this.buttonStopper()
  
  
}


