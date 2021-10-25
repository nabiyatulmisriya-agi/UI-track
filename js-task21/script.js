async function asyncFunction() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();
  console.log(posts);
}
asyncFunction();

//comments
async function asyncFunc() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let comments = await response.json();
  console.log(comments);
}
asyncFunc();

//todos
async function asyncFunct() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let todos = await response.json();
  console.log(todos);
}
asyncFunct();
