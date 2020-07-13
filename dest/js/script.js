window.onload = function(){
let arrow = document.querySelector('.arrow-up');
// console.log(document.scrollTop);

window.addEventListener('scroll',function(){
if(window.pageYOffset >= 1000){
    arrow.style.opacity = 1;
}else{
    arrow.style.opacity = 0;
}
    
});
arrow.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
})
};
;function modalShow(trigger, modal, closed) {
    trigger.forEach(element => {
        element.addEventListener('click', function (e) {
            if (e.target) {
                e.preventDefault();
            }
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            closed.addEventListener('click', function () {
                modal.style.display = 'none';
                document.body.style.overflow = 'visible';
            })

            modal.addEventListener('click', function (e) {
                if (e.target === modal) {
                    modal.style.display = 'none'
                    document.body.style.overflow = 'visible';
                }
            })
        })
    });
    // trigger.addEventListener('click', function (e) {
    //     if (e.target) {
    //         e.preventDefault();
    //     }
    //     modal.style.display = 'flex';
    //     document.body.style.overflow = 'hidden';

    //     closed.addEventListener('click', function () {
    //         modal.style.display = 'none';
    //         document.body.style.overflow = 'visible';
    //     })

    //     modal.addEventListener('click', function (e) {
    //         if (e.target === modal) {
    //             modal.style.display = 'none'
    //             document.body.style.overflow = 'visible';
    //         }
    //     })
    // })
}

let btn = document.querySelectorAll('.open-button');
let modal = document.querySelector('.overlay');
let closed = document.querySelector('.btn-close');

modalShow(btn, modal, closed);

function showModal(selector, time, close) {
    setTimeout(function (e) {
        document.querySelector('.overlay').addEventListener('click',function(e){
            if (e.target === modal) {
                modal.style.display = 'none'
                document.body.style.overflow = 'visible';
            }
        })
        // selector.addEventListener('click', function (e) {
        //     if (e.target === selector) {
        //         selector.style.display = 'none'
        //         document.body.style.overflow = 'visible';
        //     }
        // })
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        document.querySelector('.btn-close').addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';
        })

    }, time);
};
// showModal('.blur',5000);

window.addEventListener('DOMContentLoaded', function () {
    showModal('.overlay', 10000);
});







// var modal = document.querySelector("#modal");
// var modalOverlay = document.querySelector("#modal-overlay");
// var closeButton = document.querySelector("#close-button");
// var openButton = document.querySelector("#open-button");

// closeButton.addEventListener("click", function () {
//     modal.classList.toggle("closed");
//     modalOverlay.classList.toggle("closed");
// });

// openButton.addEventListener("click", function () {
//     modal.classList.toggle("closed");
//     modalOverlay.classList.toggle("closed");
// });

/* Индекс слайда по умолчанию */
;var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slider");
    let dots = document.querySelectorAll(".circle-btn");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" circle-btn-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " circle-btn-active";
}
setTimeout(() => {
    showSlides(slideIndex);
}, 1000);

new WOW().init();


;document.querySelector('.arrow-menu').addEventListener('click', function(){
    this.classList.toggle('open');
    let dropdown = document.querySelector('.dropdown');
    if(dropdown.style.display == 'flex'){
        dropdown.style.display = 'none';
    }
    else{
        dropdown.style.display = 'flex';
        this.style.animationPlayState = 'paused';
    }
});
