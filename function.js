document.addEventListener('DOMContentLoaded', function () {
  const aboutMeLink = document.querySelector('a[href="#about-me"]');
  aboutMeLink.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn trình duyệt chuyển hướng
    const aboutMeSection = document.querySelector('#about-me');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt xuống phần About Me
  });
  const cataLink = document.querySelector('a[href="#cata"]');
  cataLink.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn trình duyệt chuyển hướng
    const cataSection = document.querySelector('#cata');
    cataSection.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt xuống phần catagories
  });
  const contactLink = document.querySelector('a[href="#contact"]');
  contactLink.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn trình duyệt chuyển hướng
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt xuống phần contact
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
      window.location.href = 'About me.html';
    });
});







