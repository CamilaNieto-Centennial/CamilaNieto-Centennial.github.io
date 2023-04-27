/* Make appear and dissapear list of Nav items (inside Navbar), after clicking on the Toggle button only for Small & Medium Screen Sizes*/
const toggleButton = document.getElementById('toggle-button');
const navList = document.querySelectorAll('.navList');

toggleButton.addEventListener('click', toggleLinks);

async function toggleLinks () {
    if(window.innerWidth < 769) {
    for(var i = 0; i < navList.length; i++) {
        if (navList[i].classList.contains('d-none')){
            navList[i].classList.remove('d-none');
        }
        else {
            navList[i].classList.add('d-none');
        }
    }
    }
}


/* Burger button transition */
const menuBtn = document.querySelector('.menu');
const hamburger = document.querySelectorAll('.menu-line');

/* NavBar transition */
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set default to false
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

/* Add 'open' or delete it. Only for Small & Medium Screen Sizes */
async function toggleMenu () {
    if(!showMenu && window.innerWidth < 769) {
        hamburger.forEach(item => item.classList.add('open'));
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    }
    else if (showMenu && window.innerWidth < 769) {
        hamburger.forEach(item => item.classList.remove('open'));
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}

/* Delete 'open' for Large & Extra Large Screen Sizes */
async function checkMediaQuery() {
    let navbar = document.getElementById('navbar');
    if (window.innerWidth > 768) {
      console.log('Larger than Medium Media Query Matched!');
      hamburger.forEach(item => item.classList.remove('open'));
      nav.classList.remove('open');
      menuNav.classList.remove('open');
      navItems.forEach(item => item.classList.remove('open'));
      showMenu = false;
    }
    if (window.innerWidth < 769) {
        navbar.style.top = "0";
    }
}

checkMediaQuery();
window.addEventListener('resize', checkMediaQuery);


/* Typing Text Effect */ 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};