const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')

 
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('.mobile-menu') 

})
// navLinks.style.right = "-900px";
// menuBtn.onclick = function(){
//     if(navLinks.style.right == "-900px"){
//         navLinks.style.right = "0";
//         menu.src = "close.png";

//     }
//     else{
//         navLinks.style.right = "-900px";
//         menu.src = "menubar.png";

//     }
// }