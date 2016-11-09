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
    var title = $('#lists').append('<div class="list">')
    var dom_title = document.getElementsByClassName('list')[0]
    var listtitle = document.getElementById('list_title').value
    var h2 = document.createElement('h2')
      h2.innerHTML = listtitle
    var button = document.createElement('button')
      button.className = "destroy-list"
      button.id = listtitle
      button.innerHTML = "x"
    dom_title.appendChild(h2)
    dom_title.appendChild(button)
    var list = new List(listtitle) 
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


