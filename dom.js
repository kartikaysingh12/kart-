var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);

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
  var deleteBtn=document.createElement('button');
  deleteBtn.className='btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
  let myObj={
    name:newItem,
    email:newIttem,
    number:newItttem
  };
  let my_Obj=JSON.stringify(myObj);
  localStorage.setItem('myObj',my_Obj);

}
function removeItem(e){
  if(e.target.classList.contains('delete')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
      localStorage.removeItem('myObj');
  }
}
