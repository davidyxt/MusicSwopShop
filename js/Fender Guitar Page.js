document.addEventListener('DOMContentLoaded', function() {
    // Get the main image element
    const mainImage = document.getElementById('mainProductImage');

    // Get all thumbnail image elements
    const thumbnails = document.querySelectorAll('.product-thumbnail');

    // Check if the main image and thumbnails exist to avoid errors
    if (mainImage && thumbnails.length > 0) {
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                
                const clickedThumbnailSrc = this.src; 
                const clickedThumbnailAlt = this.alt;

                mainImage.src = clickedThumbnailSrc;
                mainImage.alt = clickedThumbnailAlt;

                thumbnails.forEach(thumb => {
                    thumb.classList.remove('active-thumbnail');
                });
                
                this.classList.add('active-thumbnail');
            });
        });
    } 
});