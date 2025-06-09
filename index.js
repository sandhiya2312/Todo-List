document.getElementById('add-btn').addEventListener('click',function(){
    const input=document.getElementById('todo-input');
    const todoText=input.value.trim();
    if(todoText==='')
    {
      alert("Please enter a todo!!!");
      return;
    }
    const li=document.createElement('li');
    li.textContent=todoText;
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Delete';
    deleteBtn.addEventListener('click',function(){
      li.remove();
    })
    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);
    input.value=''
  })
  
