const btn = document.getElementById('email-button')
btn.addEventListener('click', (e) => {

    e.preventDefault()
    var valid = true

    const form = document.querySelector('form')
    const name = form.elements['name'].value
    const email = form.elements['email'].value
    const subject = form.elements['subject'].value
    const message = form.elements['message'].value

    const groups = form.querySelectorAll('.form-group')
    console.log(groups)

    for (var i = 0; i < groups.length; i++) {
        if (groups[i].querySelector('.form-control').value === "") {
            groups[i].querySelector('.error').classList.remove("d-none")
            valid = false
        } else {
            groups[i].querySelector('.error').classList.add("d-none")
        }
    }

    if (valid) {

        btn.disabled = true
        const loading = document.querySelector(".loading")
        loading.classList.remove("d-none")

        Email.send({
            Host: "smtp.gmail.com",
            Username: "d.filipek.dev@gmail.com",
            Password: "zorzczalgwogdezh",
            To: "d.filipek.dev@gmail.com",
            From: "d.filipek.dev@gmail.com",
            Subject: `Wiadomość z portfolio - ${name}`,
            Body: `Nazwa : ${name} <br/>Email : ${email}<br/>Temat : ${subject}<br/>Wiadomość :<br/><br/>${message}`
        }).then((message) => {

            for (var i = 0; i < form.elements.length; i++) {
                form.elements[i].value = ""
            }

            btn.disabled = false
            loading.classList.add("d-none")
            Swal.fire({
                title : 'Wiadomość wysłana, dzięki :D!',
                icon : 'success'
            })
        })
    }
})