// Login Signout Model
const showModel = document.getElementById("show-model");
const showModelSignout = document.getElementById("show-model-signup");
const modelContainer = document.getElementById("model");
const signup = document.getElementById("signup");

modelContainer.style.visibility = "hidden";

showModel.addEventListener("click", () => {
    signup.setAttribute("src", "Pages/login.html");

    modelContainer.style.visibility = "visible";
});
showModelSignout.addEventListener("click", () => {
    signup.setAttribute("src", "Pages/signup.html");
    modelContainer.style.visibility = "visible";
});
modelContainer.addEventListener("click", () => {
    modelContainer.style.visibility = "hidden";
});

// Timer
const countDown = () => {
    const upperDateOne = new Date("Jan30, 2022,00:00:00").getTime();
    const upperDateTwo = new Date("Feb1, 2022,00:00:00").getTime();
    const upperDateThree = new Date("Feb2, 2022,00:00:00").getTime();
    const upperDateFour = new Date("Feb3, 2022,00:00:00").getTime();
    const upperDateFive = new Date("Feb4, 2022,00:00:00").getTime();

    const currentDate = new Date().getTime();

    const diffDateOne = upperDateOne - currentDate;
    const diffDateTwo = upperDateTwo - currentDate;
    const diffDateThree = upperDateThree - currentDate;
    const diffDateFour = upperDateFour - currentDate;
    const diffDateFive = upperDateFive - currentDate;

    const second = 1000;
    const minuts = second * 60;
    const hours = minuts * 60;
    const days = hours * 24;

    const remainDaysOne = Math.floor(diffDateOne / days);
    const remainDaysTwo = Math.floor(diffDateTwo / days);
    const remainDaysThree = Math.floor(diffDateThree / days);
    const remainDaysFour = Math.floor(diffDateFour / days);
    const remainDaysFive = Math.floor(diffDateFive / days);

    // const remainHours = Math.floor((diffDate % days) / hours);
    // const remainMinuts = Math.floor((diffDate % hours) / minuts);
    // const remainSecond = Math.floor((diffDate % minuts) / second);

    var firstBook = document.getElementById("days-book-1");
    var secondBook = document.getElementById("days-book-2");
    var thirdBook = document.getElementById("days-book-3");
    var fourthBook = document.getElementById("days-book-4");
    var fifthBook = document.getElementById("days-book-5");

    // var d = document.getElementById("days-book-1");
    // var h = document.getElementById("hours");
    // var m = document.getElementById("minuts");
    // var s = document.getElementById("second");

    firstBook.innerHTML = remainDaysOne + "days";
    secondBook.innerHTML = remainDaysTwo + "days";
    thirdBook.innerHTML = remainDaysThree + "days";
    fourthBook.innerHTML = remainDaysFour + "days";
    fifthBook.innerHTML = remainDaysFive + "days";

    // if the days == 0
    let bookOne = document.getElementById("book-one");
    let bookTwo = document.getElementById("book-two");
    let bookThree = document.getElementById("book-three");
    let bookFour = document.getElementById("book-four");
    let bookFive = document.getElementById("book-five");

    if (remainDaysOne == 0) {
        bookOne.style.display = "none";
    }
    if (remainDaysTwo == 0) {
        bookTwo.style.display = "none";
    }
    if (remainDaysThree == 0) {
        bookThree.style.display = "none";
    }
    if (remainDaysFour == 0) {
        bookFour.style.display = "none";
    }
    if (remainDaysFive == 0) {
        bookFive.style.display = "none";
    }
};
setInterval(countDown, 1000);



//Toggle nav
function toggleMenu() {
    const menuNav = document.getElementById('menu_nav');
    if (menuNav.style.display === 'none') {
        menuNav.style.display = 'block';
    } else {
        menuNav.style.display = 'none';

    }
}

/*Displaying and navigating between slides in the category page*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/*Displaying and hiding modals "Sign in Modal" and " Sign up modal"*/
const showloginModal = modal => {
    document.getElementById("login-modal-container").style.display = "block";
}

const hideloginModal = hide => {
    document.getElementById("login-modal-container").style.display = "none";

}
const showSigninModal = modal => {
    document.getElementById("login-modal-container").style.display = "none";
    document.getElementById("signin-modal-container").style.display = "block";
}
const hidesigninModal = hide => {
    document.getElementById("signin-modal-container").style.display = "none";
    document.getElementById("login-modal-container").style.display = "none";

}
const showloginModalAgain = showLogin => {
    document.getElementById("signin-modal-container").style.display = "none";
    document.getElementById("login-modal-container").style.display = "block";
}


//Cart Counting
const cartCounter = document.getElementById('cart');
const carts = document.querySelectorAll('.js-cart');

let storeCart = localStorage.getItem('cart_counter');
let counter = 0;

const addToCart = () => {
    storeCart = storeCart === null ? 0 : storeCart;
    counter = storeCart;

    counter !== 0 ? cartCounter.style.display = "block" : cartCounter.style.display = "none";

    cartCounter.innerText = counter > 9 ? "9+" : counter;

    carts.forEach(element => {
        element.addEventListener('click', (e) => {
            counter !== 0 ? cartCounter.style.display = "block" : cartCounter.style.display = "none";
            counter++;
            cartCounter.innerText = counter > 9 ? "9+" : counter;
            localStorage.setItem('cart_counter', counter)
        })
    });
};

window.addEventListener("load", addToCart);
//Change language


const changeLang = document.querySelectorAll('.js-language');
const htmlElement = document.querySelector('html');
const headElement = document.querySelector('head');
const enLink = document.createElement('link');

let storeLang = localStorage.getItem('lang');



changeLang.forEach(element => {
    element.addEventListener('click', () => {

        if (htmlElement.dir === 'rtl') {
            htmlElement.dir = 'ltr';
            element.querySelector('span').innerHTML = "Arabic";
            headElement.append(enLink);
        } else {
            htmlElement.dir = 'rtl';
            element.querySelector('span').innerHTML = "English";
            headElement.removeChild(enLink)
        }
    });
});