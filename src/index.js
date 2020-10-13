import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml ( todo ) );

// const tarea = new Todo('Aprender JavaScript!!');
// const tarea2 = new Todo('Comprar un unicornio');

// todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea2);

// console.log(tarea, tarea2);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key','ABC124');

// setTimeout ( ()=> {
//     localStorage.removeItem('mi-key');
// }, 1500);

// todoList.todos[0].imprimirClase();