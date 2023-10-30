document.addEventListener('DOMContentLoaded', function () {
  const aboutMeLink = document.querySelector('a[href="#about-me"]');
  aboutMeLink.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn trình duyệt chuyển hướng
    const aboutMeSection = document.querySelector('#about-me');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt xuống phần About Me
  });
});







