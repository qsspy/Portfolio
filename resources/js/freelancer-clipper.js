const wrapper = document.querySelector('#clip-wrapper')
const content = document.querySelector('#freelancer-name') 

const words = ['Freelancer', 'Developer', 'Student']

var counter = 0;

function clipper() {


    wrapper.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)"

    setTimeout(() => {
        counter = (counter + 1)%words.length
        content.innerHTML = words[counter]
        wrapper.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }, 1000)

    setTimeout(clipper,2500)
    
}

clipper()

