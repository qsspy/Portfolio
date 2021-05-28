extraPadding = 150
clipTop = Math.round(extraPadding * 0.75)
clipBottom = Math.round(extraPadding * 0.25)

sections = document.querySelectorAll("#projects-wrapper section")

document.querySelector('body').onresize = () => {
    run()
}

window.addEventListener('load', run)

function run() {

    for (let i = 0; i < sections.length; i++) {
        if (i % 2 == 0) {
            sectionToClip = sections[i]
            sectionToClip.style.padding = `${extraPadding}px 0px`
            sectionHeight = sectionToClip.offsetHeight
            sectionToClip.style.clipPath = `polygon(0 ${clipTop}px, 100% ${clipBottom}px, 100% ${sectionHeight - clipBottom}px,0 ${sectionHeight - clipTop}px)`
        }
    }
}