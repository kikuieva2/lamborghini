const finalPage =document.getElementById('final');
const arrow = document.getElementById('firstarrow');
const blog = document.getElementById('blog');
const read= document.getElementById('read');
const secread = document.getElementById('readmore');
const blogtext = document.getElementById('blogtext');



// uzspiežot uz pogas pārritinās uz final konteineri

arrow.addEventListener("click", function(){
    arrow.classList.add("clicked");
    finalPage.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        arrow.classList.remove('clicked');
      }, 200);
});

read.addEventListener("click",function(event){
    event.preventDefault();
    blog.classList.toggle('active');
});

secread.addEventListener("click",function(event){
    event.preventDefault();
    blogtext.classList.toggle('active');
})