const ul =document.querySelector('.item');
const mar=ul.firstElementChild;
mar.textContent='hello';
mar.style.background='green';
ul.lastElementChild.style.background='yellow';
const btn=document.querySelector('.button');
btn.addEventListener('click',(e)=>{console.log('click');});
btn.addEventListener('mouseover',(e)=>{console.log('mouseover');});
btn.addEventListener('mouseout',(e)=>{console.log('mouseout');});
