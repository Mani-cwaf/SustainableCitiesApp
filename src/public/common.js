const observer = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            element.target.classList.add('show');
        } else {
            element.target.classList.remove('show');
        }
    });
});
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));