window.addEventListener('scroll', function () {


    var backToTop = document.querySelector('.back-top');
    backToTop.classList.toggle('back', window.scrollY > 0);

})