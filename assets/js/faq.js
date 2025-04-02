function toggleFAQ(element) {
    let faqItem = element.parentElement;
    let content = faqItem.querySelector('.faq-content');
    let icon = element.querySelector('.icon');

    if (faqItem.classList.contains('active')) {
        faqItem.classList.remove('active');
        icon.textContent = "+";
    } else {
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.icon').textContent = "+";
        });
        faqItem.classList.add('active');
        icon.textContent = "−";
    }
}