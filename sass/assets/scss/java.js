// var titel=document.querySelector('#titel');
var result = document.getElementById("name");
var nav=document.querySelector('#navbar-main');
let home=document.querySelector('.home');
let about=document.querySelector('.about');
let  skill=document.querySelector('.skill');
let project=document.querySelector('.project');
let contect=document.querySelector('.contact');
let fix=document.querySelector('.fix');
function writer(element,text,time){
	var i = 0;
	var run = setInterval(()=>{
		element.innerHTML+=text.charAt(i);
		i++;
		if(i==text.length){
            clearInterval(run);
        }
	},time*1000)
}
window.addEventListener('scroll',()=>{
  // console.log(scrollY)
    nav.classList.toggle('show1',window.scrollY>0)
    if(scrollY<450 && scrollY>0){
      home.classList.add('active2');
    }
    else
    home.classList.remove('active2');

  if(scrollY>450 && scrollY<1300){
    about.classList.add('active2');
  }
  else
  about.classList.remove('active2');

  if(scrollY>1300 && scrollY<1800){ 
    skill.classList.add('active2')
  }
  else 
  skill.classList.remove('active2')
  if(scrollY>1800 && scrollY<2900){
    project.classList.add('active2')
  }
  else
  project.classList.remove('active2')

if(scrollY>2900 && scrollY<4000){
  contect.classList.add('active2');
}
else
contect.classList.remove('active2')
})
fix.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo(0,0);
})



writer(result,"(توسعه دهنده وب)",0.4)