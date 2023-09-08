document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const images = Array.from(document.querySelectorAll(".image"));
  let currentImageIndex = 0;

  // Function to open the modal and display the clicked image
  function openModal(imageSrc) {
    modalImage.src = imageSrc; // Set the image source in the modal
    modal.style.display = "block"; // Show the modal
    modal.classList.remove("hidden"); // Remove the "hidden" class

    // Disable "prev" button if it's the first image, and enable it otherwise
    prevBtn.disabled = currentImageIndex === 0;
    // Disable "next" button if it's the last image, and enable it otherwise
    nextBtn.disabled = currentImageIndex === images.length - 1;
  }

  // Add click event listeners to all images
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentImageIndex = index; // Update the current image index
      const imageSrc = image.getAttribute("src");
      openModal(imageSrc); // Call the openModal function with the clicked image source
    });
  });

  // Add click event listener for the "prev" button
  prevBtn.addEventListener("click", () => {
    updateModalWithImage(currentImageIndex - 1); // Show the previous image
  });

  // Add click event listener for the "next" button
  nextBtn.addEventListener("click", () => {
    updateModalWithImage(currentImageIndex + 1); // Show the next image
  });

  // Add click event listener to close the modal when the closeBtn is clicked
  closeBtn.addEventListener("click", () => {
    closeModal(); // Call the closeModal function
  });

  // Add click event listener for the modal background to close the modal
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(); // Call the closeModal function
    }
  });

  // Function to close the modal and add the "hidden" class
  function closeModal() {
    modal.style.display = "none"; // Hide the modal
    modal.classList.add("hidden"); // Add the "hidden" class
  }

  // Function to update the modal with a new image based on currentImageIndex
  function updateModalWithImage(index) {
    if (index >= 0 && index < images.length) {
      currentImageIndex = index; // Update the current image index
      const imageSrc = images[currentImageIndex].getAttribute("src");
      modalImage.src = imageSrc; // Set the image source in the modal

      prevBtn.disabled = currentImageIndex === 0;
      nextBtn.disabled = currentImageIndex === images.length - 1;
    }
  }
});
