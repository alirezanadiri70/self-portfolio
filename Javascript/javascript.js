
const navSlide = () =>{
    const slider = document.querySelector('.slide');
    const nav = document.querySelector('.nav-links');
    const navLinks =document.querySelectorAll('.nav-links li')
    
    slider.addEventListener('click', () => { 
        //toggle nav
        nav.classList.toggle('nav-active');

        
        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
         });
         //slider animation
         slider.classList.toggle('toggle');
    });
  
}
navSlide();