/* Make appear and dissapear list of Nav items (inside Navbar), after clicking on the Toggle button */
const toggleButton = document.getElementById('toggle-button');
const navList = document.getElementsByClassName('navList');

toggleButton.addEventListener('click', () => {
    for(var i = 0; i < navList.length; i++) {
        if (navList[i].classList.contains('d-none')){
            navList[i].classList.remove('d-none');
        }
        else {
            navList[i].classList.add('d-none');
        }
    }
})
