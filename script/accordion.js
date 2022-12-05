const questionBtn = document.querySelectorAll(".faq__block button")

questionBtn.forEach((el) => {
    el.addEventListener('click', () => {

        let answer = el.nextElementSibling;
        // console.log(answer)

        if (answer.style.maxHeight) {
            document.querySelectorAll('.answer').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.answer').forEach((el) => el.style.maxHeight = null)
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
})