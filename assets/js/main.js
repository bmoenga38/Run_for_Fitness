document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".elementor-element-cce8725");
  const images = [
    "./assets/images/jug.jpg",
    "./assets/images/top-view-of-african-runner-wearing-black-sportswea-YJDTNJXb.jpg",
  ];
  let currentIndex = 0;

  function updateBackgroundImage() {
    container.style.setProperty(
      "--current-image",
      `url('${images[currentIndex]}')`
    );
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(updateBackgroundImage, 2500); // Change image every 2.5 seconds
});
