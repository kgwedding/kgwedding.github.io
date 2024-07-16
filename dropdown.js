document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                faqQuestions.forEach(q => q.nextElementSibling.style.maxHeight = null);
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
