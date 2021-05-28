window.addEventListener('scroll', () => {
    const nav = document.querySelector('#nav-wrapper')
    const header = document.querySelector('header')
    const freelancer = document.querySelector('#freelancer-name')

    if(window.scrollY > header.offsetHeight - 100) {
        nav.classList.add('sticky')
        freelancer.classList.add('d-none')
    } else {
        nav.classList.remove('sticky')
        freelancer.classList.remove('d-none')
    }
})