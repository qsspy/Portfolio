function scrollTo(element) {
    
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });    
}

window.onload = function () {
    document.getElementById("a-aboutme").addEventListener('click', () => {
        scrollTo(document.getElementById("aboutme"));
    });

    document.getElementById("a-portfolio").addEventListener('click', () => {
        scrollTo(document.getElementById("portfolio"));
    });

    document.getElementById("a-portfolio-2").addEventListener('click', () => {
        scrollTo(document.getElementById("portfolio"));
    });

    document.getElementById("a-contact").addEventListener('click', () => {
        scrollTo(document.getElementById("contact"));
    });
}