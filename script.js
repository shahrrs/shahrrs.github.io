document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // lightbox for project screenshots
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");

  if (lightbox && lightboxImg) {
    document.querySelectorAll(".shot-grid figure").forEach(function (fig) {
      fig.addEventListener("click", function () {
        var img = fig.querySelector("img");
        var caption = fig.querySelector("figcaption");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = caption ? caption.textContent : "";
        lightbox.classList.add("open");
      });
    });

    lightbox.addEventListener("click", function () {
      lightbox.classList.remove("open");
      lightboxImg.src = "";
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        lightbox.classList.remove("open");
        lightboxImg.src = "";
      }
    });
  }
});
