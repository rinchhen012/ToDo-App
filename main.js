(()=>{const e=document.querySelector(".todo-input"),t=document.querySelector(".todo-button"),n=document.querySelector(".todo-list"),s=document.querySelector(".filter-todo");document.addEventListener("DOMContentLoaded",(function(){let e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos")),e.forEach((e=>{const t=document.createElement("div");t.classList.add("todo");const s=document.createElement("li");s.innerText=e,s.classList.add("todo-item"),t.appendChild(s);const l=document.createElement("button");l.innerHTML='<i class="fas fa-check"></i>',l.classList.add("check-btn"),t.appendChild(l);const o=document.createElement("button");o.innerHTML='<i class="fas fa-trash"></i>',o.classList.add("del-btn"),t.appendChild(o),n.appendChild(t)}))})),t.addEventListener("click",(function(t){t.preventDefault();const s=document.createElement("div");s.classList.add("todo");const l=document.createElement("li");l.innerText=e.value,l.classList.add("todo-item"),s.appendChild(l),function(e){let t;t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos")),t.push(e),localStorage.setItem("todos",JSON.stringify(t))}(e.value);const o=document.createElement("button");o.innerHTML='<i class="fas fa-check"></i>',o.classList.add("check-btn"),s.appendChild(o);const a=document.createElement("button");a.innerHTML='<i class="fas fa-trash"></i>',a.classList.add("del-btn"),s.appendChild(a),n.appendChild(s),e.value=""})),n.addEventListener("click",(function(e){const t=e.target;if("del-btn"===t.classList[0]){const e=t.parentElement;e.classList.add("fall"),function(e){let t;t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));const n=e.children[0].innerText;t.splice(t.indexOf(n),1),localStorage.setItem("todos",JSON.stringify(t))}(e),e.addEventListener("transitionend",(t=>{e.remove()}))}"check-btn"===t.classList[0]&&i.classList.toggle("completed")})),s.addEventListener("click",(function(e){n.childNodes.forEach((t=>{switch(e.target.value){case"all":t.style.display="flex";break;case"completed":t.classList.contains("completed")?t.style.display="flex":t.style.display="none";break;case"uncompleted":t.classList.contains("completed")?t.style.display="none":t.style.display="flex"}}))}))})();