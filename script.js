function toggleHiddenImages() {
    const hiddenImages = document.querySelector('.hidden-images');
    const seeMoreBtn = document.getElementById('see-more-btn');

    if (hiddenImages.style.display === 'none') {
        hiddenImages.style.display = 'flex'; // Show hidden images
        seeMoreBtn.textContent = 'See less...'; // Change button text
    } else {
        hiddenImages.style.display = 'none'; // Hide hidden images
        seeMoreBtn.textContent = 'See more...'; // Change button text
    }
}
