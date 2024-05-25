import './style.css'
console.log("switch")

const hamburdgerMenu = document.getElementById("menu")
const navLinks = document.querySelector('.nav-links')
let open = true; 
hamburdgerMenu.addEventListener('click', ()=>{
    if(open === true){
        open = false;
        hamburdgerMenu.innerHTML = `<svg class="h-9 text-3xl cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>`;
    
    }else{
        open = true;
        hamburdgerMenu.innerHTML = `<svg class="h-9 text-3xl cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>`;
 
    }
    navLinks.classList.toggle('top-[-100%]');
    navLinks.classList.toggle('top-14');
})