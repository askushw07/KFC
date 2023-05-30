
function navbar(){
    document.querySelector('.shubhamnav').style.display='block'
    document.querySelector('.material-symbols-outlined').style.display='none'
    document.getElementById('navclose').style.display='block';

}

document.getElementById('navclose').addEventListener('click', function(){
    document.querySelector('.shubhamnav').style.display='none'
    document.querySelector('.material-symbols-outlined').style.display='block'
    document.getElementById('navclose').style.display='none';
})


//------- slider-------
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("kfc-posters");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//-------page linking---------
document.getElementById('navbar-menu').addEventListener('click', function(){
    location.href='/KFC/HTML/product.html';
})
document.getElementById('navbar-about').addEventListener('click', function(){
    location.href='/KFC/HTML/deals.html';
})
document.getElementById('navbar-account').addEventListener('click', function(){
    location.href='/KFC/HTML/signup.html';
})
document.getElementById('navbar-cart-bucket').addEventListener('click', function(){
    location.href='/KFC/HTML/cart.html';
})
document.getElementById('navbar-kfc-logo').addEventListener('click', function(){
    location.href='/KFC/HTML/index.html';
})




// -------after clicking on images moving to product page
document.getElementById("periperi").addEventListener("click", function () {
    periperidiv();
})
function periperidiv() {
    window.location = "/KFC/HTML/product.html#periperiday";
}

document.getElementById("match").addEventListener("click", function () {
    matchdiv();
})
function matchdiv() {
    window.location = "/KFC/HTML/product.html#matchday";
}

document.getElementById("deal").addEventListener("click", function () {
    dealdiv();
})
function dealdiv() {
    window.location = "/KFC/HTML/product.html#dealday";
}

document.getElementById("chickenbucket").addEventListener("click", function () {
    chickendiv();
})

function chickendiv() {
     window.location = "/KFC/HTML/product.html#chickenbucketday";
}

document.getElementById("legpiece").addEventListener("click", function () {
    legdiv();
})
function legdiv() {
     window.location = "/KFC/HTML/product.html#legpieceday";
}
document.getElementById("rolls").addEventListener("click", function () {
    rolldiv();
})
function rolldiv() {
    window.location = "/KFC/HTML/product.html#rollsday";
}
document.getElementById("boxmeal").addEventListener("click", function () {
    boxmealdiv();
})
function boxmealdiv() {
    window.location = "/KFC/HTML/product.html#boxmealday";
}

document.getElementById('product').addEventListener('click', function(){
    location.href='/KFC/HTML/product.html';
})
function reedemBtn(){
    window.location.href='/KFC/HTML/deals.html'
}

// -----getting username-----
var usernameData=JSON.parse(localStorage.getItem('username')) || []