const todoList = [
    {todo: "clone repo for starter code", status: "complete"},
    {todo: "link JS and CSS to index", status: "complete"},
    {todo: "create for loop to check status & add to completed", status: "complete"},
    {todo: "create for loop to log completed items", status: "incomplete"}        
];

const completedTodos = [];

/** 
for(i=0;i<todoList.length;i++) {
	if(todoList[i].status == "complete") {
  	    completedTodos.push(todoList[i]);
	}
}
**/

for(const item of todoList) {
	if(item.status == "complete") {
  	completedTodos.push(item);
  }
}

/**
for(i=0;i<completedTodos.length;i++) {
	console.log(completedTodos[i].todo);
}
**/

for(const {todo = item} of completedTodos) {
    console.log(todo);
}
