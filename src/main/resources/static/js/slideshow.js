document.addEventListener('DOMContentLoaded', () => {
    const slideshowSection = document.getElementById('slideshow-section');
    if (slideshowSection) {
        const images = [
            '/images/home/slideshow-1.jpg',
            '/images/home/slideshow-2.jpg',
            '/images/home/slideshow-3.jpg'
        ];
        let currentImageIndex = 0;

        // Preload images for smoother transitions
        function preloadImages() {
            for (const imageUrl of images) {
                const img = new Image();
                img.src = imageUrl;
            }
        }

        function changeImage() {
            // Set the first image immediately
            slideshowSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
            
            // Then cycle through the rest
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        // Preload images and set the first one on load
        preloadImages();
        changeImage(); // Set initial image

        // Change image at a regular interval
        setInterval(changeImage, 4000); // Change image every 4 seconds
    }
});