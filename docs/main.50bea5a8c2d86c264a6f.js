(()=>{"use strict";var t={163:(t,e,n)=>{function o(t,e){for(var n,o=0;o<e.length;o++)(n=e[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,{L:()=>g});var a=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}return r(t,null,[{key:"fromJson",value:function(e){var n=e.id,o=e.tarea,r=e.completado,a=e.creado,i=new t(o);return i.id=n,i.completado=r,i.creado=a,i}}]),r(t,[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}]),t}();function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,t},f:function t(){try{a||null==n.return||n.return()}finally{if(i)throw t}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function c(t,e){for(var n,o=0;o<e.length;o++)(n=e[o]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}var u=function(){function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.cargarLocalStorage()}return function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(t,[{key:"nuevoTodo",value:function(t){this.todos.push(t),localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"marcarCompletado",value:function(t){var e,n=i(this.todos);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.id==t){o.completado=!o.completado,localStorage.setItem("todo",JSON.stringify(this.todos));break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((function(t){return a.fromJson(t)}))}}]),t}();function s(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,t},f:function t(){try{a||null==n.return||n.return()}finally{if(i)throw t}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var f=document.querySelector(".todo-list"),m=document.querySelector(".new-todo"),y=document.querySelector(".clear-completed"),v=document.querySelector(".filters"),p=document.querySelectorAll(".filtro"),h=function(t){var e='<li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n    <div class="view">\n        <input class="toggle" type="checkbox" ').concat(t.completed?"checked":"",">\n        <label>").concat(t.tarea,'</label>\n        <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n    </li>'),n=document.createElement("div");return n.innerHTML=e,f.append(n.firstElementChild),n.firstElementChild};m.addEventListener("keyup",(function(t){if(13===t.keyCode&&0<m.value.length){var e=new a(m.value);g.nuevoTodo(e),h(e),m.value=""}})),f.addEventListener("click",(function(t){var e=t.target.localName,n=t.target.parentElement.parentElement,o=n.getAttribute("data-id");e.includes("input")?(g.marcarCompletado(o),n.classList.toggle("completed")):e.includes("button")&&(g.eliminarTodo(o),f.removeChild(n))})),y.addEventListener("click",(function(){g.eliminarCompletados();for(var t,e=f.children.length-1;0<=e;e--)(t=f.children[e]).classList.contains("completed")&&f.removeChild(t)})),v.addEventListener("click",(function(t){var e=t.target.text;if(e){p.foreach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var n,o=s(f.children);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.classList.remove("hidden");var a=r.classList.contains("completed");"Pendientes"===e?a&&r.classList.add("hidden"):"Completados"===e&&(a||r.classList.add("hidden"))}}catch(t){o.e(t)}finally{o.f()}}}));var g=new u;g.todos.forEach((function(t){return h(t)}))}},e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(163)})();