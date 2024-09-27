function openSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}
function change(s) {
  console.log(s);
  var img = document.getElementById("level_img");
  img.setAttribute("src", s);
}
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
