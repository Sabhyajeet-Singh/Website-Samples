
const preloader = document.getElementById('preloader');
console.log(preloader)
window.addEventListener('load' , ()=>{
    preloader.style.display="none"
})

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
  