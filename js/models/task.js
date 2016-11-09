'use strict';
// Task Model



const Task = (function createList(){
  var id = 0;
  return class {
    constructor(description, priority, list_id){
      this.id = ++id;
      this.description = description;
      this.priority = priority;
      this.list_id = list_id;
      stores.push(Object.assign({}, {lists: store().lists, tasks: [...store().tasks, this]}))
    }
  }
}())
