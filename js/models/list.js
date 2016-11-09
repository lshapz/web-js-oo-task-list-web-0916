'use strict';
// List Model


const List = (function createList(){
  var id = 0;
  return class {
    constructor(name){
      this.id = ++id
      this.name = name
      stores.push(Object.assign({}, {lists: [...store().lists, this], tasks: store().tasks}))
    }
  }
}())
