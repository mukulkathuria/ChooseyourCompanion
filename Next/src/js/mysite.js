document.getElementById('openPopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'block';
});
document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});
window.addEventListener('click', function (event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});

document.getElementById('openPopup2').addEventListener('click', function () {
    document.getElementById('popup2').style.display = 'block';
    showSlide(1);
});

document.getElementById('closePopup2').addEventListener('click', function () {
    document.getElementById('popup2').style.display = 'none';
});
let currentSlide = 1;
function showSlide(n) {
    let slides = document.getElementsByClassName('slide');
    if (n < 1) currentSlide = 1;
    if (n > slides.length) currentSlide = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide - 1].style.display = 'block';
}

function navigateSlide(n) {
    showSlide(currentSlide += n);
}

document.getElementById('next1').addEventListener('click', function () {
    navigateSlide(1);
});

document.getElementById('prev2').addEventListener('click', function () {
    navigateSlide(-1);
});

document.getElementById('next2').addEventListener('click', function () {
    navigateSlide(1);
});

document.getElementById('prev3').addEventListener('click', function () {
    navigateSlide(-1);
});

document.getElementById('next3').addEventListener('click', function () {
    navigateSlide(1);
});

document.getElementById('prev4').addEventListener('click', function () {
    navigateSlide(-1);
});
document.getElementById('next4').addEventListener('click', function () {
    navigateSlide(1);
});
document.getElementById('prev5').addEventListener('click', function () {
    navigateSlide(-1);
});
document.getElementById('next5').addEventListener('click', function () {
    navigateSlide(1);
});
document.getElementById('prev6').addEventListener('click', function () {
    navigateSlide(-1);
});
document.getElementById('next6').addEventListener('click', function () {
    navigateSlide(1);
});
document.getElementById('prev7').addEventListener('click', function () {
    navigateSlide(-1);
});
document.getElementById('submit').addEventListener('click', function () {
    // Add your code to handle form submission here
    document.getElementById('popup2').style.display = 'none';
});



