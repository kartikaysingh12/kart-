var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newIitem=document.getElementById('email').value;
    var newItem=document.getElementById('name').value;
    localStorage.setItem('email',newIitem);
    localStorage.setItem('name',newItem);
}