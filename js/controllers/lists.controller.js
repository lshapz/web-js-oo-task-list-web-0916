'use strict';
// Lists Controller
function ListsController(){
  // this.$addListForm = $('#add_list');
  // this.$listTitleInput = $('#list_title');
  // this.$selectListMenu = $('#select_list');
  // this.$addTaskForm = $('#add_task');
  // this.$wrapper = $('#wrapper');
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
        new_one.id = listtitle
    var h2 = document.createElement('h2')
      h2.innerHTML = listtitle
    var button = document.createElement('button')
      button.className = "destroy-list"
      button.innerHTML = "x"
      
      new_one.appendChild(h2)
      new_one.appendChild(button)

    var list = new List(listtitle) 

    var ul = document.createElement('ul')
      ul.id = `list-${list.id}` 

      new_one.appendChild(ul)

    var selection = document.getElementById('select_list')
    var option = document.createElement("option")
      option.id = list.id 
      option.value = list.id 
      option.innerHTML = listtitle
    selection.add(option)

    // debugger
}


  ListsController.prototype.deleteList = function(){
    $('button#destroy-list').on('click'), function(){
      event.preventDefault(); 


    }

  }



ListsController.prototype.init = function(){
  this.buttonStopper()
  
}


