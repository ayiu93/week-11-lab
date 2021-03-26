
const todoList = [
    {todo: "clone repo for starter code", status: "complete"},
    {todo: "link JS and CSS to index", status: "complete"},
    {todo: "create for loop to check status & add to completed", status: "incomplete"},
    {todo: "create for loop to log completed items", status: "incomplete"}        
];

const completedTodos = [];

for(i=0;i<todoList.length;i++) {
	if(todoList[i].status == "complete") {
  	    completedTodos.push(todoList[i]);
	}
}

