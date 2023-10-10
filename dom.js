var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit', addItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('name').value;
  var newIttem = document.getElementById('email').value;
  var newItttem = document.getElementById('number').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newIttem));
  li.appendChild(document.createTextNode(newItttem));
  var deleteBtn=document.createElement('input');
  var editbtn=document.createElement('input');
  editbtn.type='button';
  editbtn.value='edit';
  deleteBtn.type='button';
  deleteBtn.value='Delete';
  editbtn.className='btn float-right';
  deleteBtn.className='btn float-right ';
  li.appendChild(deleteBtn);
  li.appendChild(editbtn);
  

  // Append li to list
  itemList.appendChild(li);
  let myObj={
    name:newItem,
    email:newIttem,
    number:newItttem
  };
  let my_Obj=JSON.stringify(myObj);
  localStorage.setItem(newIttem,my_Obj);
  deleteBtn.onclick =()=>{
    localStorage.removeItem(newIttem);
    itemList.removeChild(li);
  }
  editbtn.onclick= ()=>{
    localStorage.removeItem(newIttem);
    itemList.removeChild(li);
    document.getElementById('name').value=myObj.name;
    document.getElementById('email').value=myObj.email;
    document.getElementById('number').value=myObj.number;
  }
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  itemList.appendChild(li);

}
