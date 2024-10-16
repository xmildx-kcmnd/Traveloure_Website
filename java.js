let themeBtn = document.querySelector('#theme-btn');
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    searchBar.classList.remove('active');
    navbar.classList.remove('active');
}


themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}


document.querySelector('#search-btn').onclick = () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
}


document.querySelector('#menu-bar').onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



/*nav slider*/

function initializeSlider(navButtons, slides) {
    const sliderNav = function (manual) {
        navButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        contents1.forEach((content) => {
            content.classList.remove('active');
        });

        contents2.forEach((content) => {
            content.classList.remove('active');
        });

        contents3.forEach((content) => {
            content.classList.remove('active');
        });

        contents4.forEach((content) => {
            content.classList.remove('active');
        });


        navButtons[manual].classList.add('active');
        slides[manual].classList.add('active');
        contents1[manual].classList.add('active');
        contents2[manual].classList.add('active')
        contents3[manual].classList.add('active');
        contents4[manual].classList.add('active');
    };

    navButtons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i);
        });
    });
}

const navButtons1 = document.querySelectorAll(".nav-btn1");
const slides1 = document.querySelectorAll(".image-sl1");
const contents1 = document.querySelectorAll(".slcontain1");
initializeSlider(navButtons1, slides1);

const navButtons2 = document.querySelectorAll(".nav-btn2");
const slides2 = document.querySelectorAll(".image-sl2");
const contents2 = document.querySelectorAll(".slcontain2");
initializeSlider(navButtons2, slides2);

const navButtons3 = document.querySelectorAll(".nav-btn3");
const slides3 = document.querySelectorAll(".image-sl3");
const contents3 = document.querySelectorAll(".slcontain3");
initializeSlider(navButtons3, slides3);

const navButtons4 = document.querySelectorAll(".nav-btn4");
const slides4 = document.querySelectorAll(".image-sl4");
const contents4 = document.querySelectorAll(".slcontain4");
initializeSlider(navButtons4, slides4);

/* Search bar autocomplete feature */
const searchBox = document.querySelector('#search-box');
const autocompleteList = document.getElementById('autocomplete-list');

// Change this part 
const suggestions = [
    'Hotel', 'Vehicle', 'Food and Dining', 'Coron',
    'Busuanga', 'El Nido', 'Rental', 'Puerto Prinsesa'
];

searchBox.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    autocompleteList.innerHTML = '';

    if (inputValue.length > 0) {
        const matchingSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(inputValue)
        );

        matchingSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = suggestion;

            suggestionElement.addEventListener('click', function() {
                searchBox.value = suggestion;
                autocompleteList.innerHTML = '';
            });

            autocompleteList.appendChild(suggestionElement);
        });

        autocompleteList.style.display = 'block';
    } else {
        autocompleteList.style.display = 'none';
    }
});

document.addEventListener('click', function(e) {
    if (!searchBox.contains(e.target) && !autocompleteList.contains(e.target)) {
        autocompleteList.style.display = 'none';
    }
});