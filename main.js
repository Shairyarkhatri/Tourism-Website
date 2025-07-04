const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-link");
const menubtnLine = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    menu.classList.toggle("open");
    
    const isOpen = menu.classList.contains("open");
    menubtnLine.setAttribute("class", isOpen? "ri-close-line":"ri-menu-line")
});


menu.addEventListener("click", (e) => {
    menu.classList.remove("open");
    menubtnLine.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".destination-card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".showcase-image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".showcase-content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".showcase-content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".showcase-btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".banner-card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".discover-card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        

    }
});