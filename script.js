document.querySelector('#portfolio-id').addEventListener('click',()=>{alert('This is my portfolio');});
const container=document.querySelector('#Mcontainer');
const welcome=document.querySelector('#welcome');

function replace(){
    container.style.display='contents';
    welcome.style.display='none';
    };
setTimeout(replace, 3500);

const hamburg=document.getElementById('hamburg');
const navopt=document.getElementById('navopt');
hamburg.addEventListener('click',()=>{
navopt.classList.toggle('active');
})

