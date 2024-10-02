function change(s) {
  console.log(s);
  var img = document.getElementById("level_img");
  img.setAttribute("src", s);
}
document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
// الهيدر

  // Define the header content as a string
  const headerContent = `
 
  <header>
    <div class="inner_header">
      <div class="logo">
        <img
          src="https://i.ibb.co/jRRc1R8/Picsart-24-05-18-13-42-30-197.png"
          alt=""
        />
      </div>
      <nav>
        <a href="../index.html"><li>home</li></a>
        <a href=""><li>about</li></a>
        <a href=""><li>porfolio</li></a>
        <a href=""><li>contact</li></a>
      </nav>
      <div class="menu_icon" id="menu_icon" onclick="openSidebar()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>



`;

// Inject the header content into the div with id "header"
document.getElementById("header").innerHTML = headerContent;


// fetch("../header.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("header").innerHTML = data;
//   });
//الفوتر
fetch("../footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

//القائمة الجانبية
fetch("../aside.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("asider").innerHTML = data;
  });
//فتح القائمة الجانبية
function openSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}
//عرض الازرار الجانبية مثل الهوم و الاب
fetch("../go_home.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("go_home").innerHTML = data;
  });
