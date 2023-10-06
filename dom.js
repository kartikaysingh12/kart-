const val=document.getElementById('naming');
val.style.fontWeight="bold"; 
val.style.color="green";
const lii=document.getElementsByTagName('li');
for(var i=0;i<lii.length;i++)
{
    lii[i].style.fontWeight='bold';
}
lii[3].style.backgroundColor='green';
