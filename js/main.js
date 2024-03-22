// Navbar Fixed On Top when Scroll

let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add('header-scrolled');
    }else{
        nav.classList.remove('header-scrolled');
    }
}

// Navbar close when Click

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(e){
    e.addEventListener('click', function(){
        navCollapse.classList.remove('show');
    })
})

//text typing animation 1
let texttwo = "Organic";
let typingElementt = document.getElementById("typing-text2");
let chartIndex = 0;
let ttypingSpeed = 350; // adjust typing speed

function textType() {
    if (chartIndex < texttwo.length) {
        typingElementt.textContent += texttwo[chartIndex];
        chartIndex++;
        setTimeout(textType, ttypingSpeed);
    }else {
        chartIndex = 0; // start over for infinite loop
        typingElementt.textContent = ""; // clear text before typing
        setTimeout(textType, 200); // delay before restarting animation
    }
}

textType();















