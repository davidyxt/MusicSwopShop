// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;

    // Function to display the active slide
    function showSlide(index) {
        const items = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.dot');

        // Loop through all items to hide them and remove active class from dots
        items.forEach((item, idx) => {
            item.classList.remove('active');
            dots[idx].classList.remove('active');
            if (idx === index) {
                item.classList.add('active');
                dots[idx].classList.add('active');
            }
        });

        // Update the current index
        currentIndex = index;
    }

    // Attach click event listeners to dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

});
