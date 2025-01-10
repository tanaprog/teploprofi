const faqs = document.querySelectorAll('.faq')

function showAnswer (){
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle("active")
        })
    })
}

showAnswer();
