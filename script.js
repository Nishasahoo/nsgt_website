// HEOR SLIDER 

var swiper = new Swiper('.heroSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 0,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


// BRANDS COM SLIDER 

var swiper = new Swiper('.comSwiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 2,
        },
    }
});

// ABOUT SLIDER 

var swiper = new Swiper('.aboutSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 1200,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// TEAMS SLIDER 

var swiper = new Swiper('.teamSwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});

// TESTIMONIALS SLIDER 

// var swiper = new Swiper('.testSwiper',{
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop:true,
//     autoplay:{
//         delay:2000,
//     },
//     navigation:{
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints:{
//         1400:{
//             slidesPerView: 3,
//         },
//         1200:{
//             slidesPerView: 3,
//         },
//         900:{
//             slidesPerView: 2,
//         },
//         500:{
//             slidesPerView: 1,
//         },
//         0:{
//             slidesPerView: 1,
//         },
//     }
// });


// single blog content smooth
// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }

// ABOUT PAGE ABPSWIPER SLIDER 

var swiper = new Swiper('.abpSwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 500,
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});


// ABOUT PAGE CLIENT FEEDBACK SLIDER 

var swiper = new Swiper('.cfbSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 1200,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1200,
});


// SERVICES PAGE SCSWIPER SLIDER 

var swiper = new Swiper('.scSwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});



// SHOW MENU 

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_menu');
    console.log('clicked');
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
});
tl.to(".service-element", {
    rotation: 360,
    y: 0,
    opacity: 1,
    stagger: 0.5,
});

let tl1 = gsap.timeline();

tl1.from(".section-title", {
    x: -100,
    opacity: 0,
    duration: 1,
});
tl1.to(".section-title", {
    x: 0,
    opacity: 1,
});
tl1.from(".service-wrapper", {
    x: 200,
    opacity: 0,
});
tl1.to(".service-wrapper", {
    x: 0,
    opacity: 1,
});

tl1.from(".service-bottom-content", {
    x: -200,
    opacity: 0,
});
tl1.to(".service-bottom-content", {
    x: 0,
    opacity: 1,
});
tl1.from(".process-top", {
    x: -200,
    opacity: 0,
});
tl1.to(".process-top", {
    x: 0,
    opacity: 1,
});



let tl2 = gsap.timeline();


tl2.from(".process-title", {
    x: -200,
    opacity: 0,
});
tl2.to(".process-title", {
    x: 0,
    opacity: 1,
});
tl2.from(".process-img", {
    scale: 0.2,
    opacity: 0,
});
tl2.to(".process-img", {
    scale: 1,
    opacity: 1,
});
tl2.from(".process-box1", {
    x: -200,
    opacity: 0,
});
tl2.to(".process-box1", {
    x: 0,
    opacity: 1,
});
tl2.from(".process-box2", {
    x: -200,
    opacity: 0,
});
tl2.to(".process-box2", {
    x: 0,
    opacity: 1,
});
tl2.from(".process-box3", {
    x: 200,
    opacity: 0,
});
tl2.to(".process-box3", {
    x: 0,
    opacity: 1,
});


let tl3 = gsap.timeline();

tl3.from(".teams-title", {
    x: -200,
    opacity: 0,
});
tl3.to(".teams-title", {
    x: 0,
    opacity: 1,
});
tl3.from(".teams-swiper", {
    y: 100,
    opacity: 0,
});
tl3.to(".teams-swiper", {
    y: 0,
    opacity: 1,
});


let tl4 = gsap.timeline();

tl4.from(".test-title", {
    x: -200,
    opacity: 0,
});
tl4.to(".test-title", {
    x: 0,
    opacity: 1,
});
tl4.from(".client-det", {
    x: -100,
    opacity: 0,
});
tl4.to(".client-det", {
    x: 0,
    opacity: 1,
});
tl4.from(".client-content", {
    x: 100,
    opacity: 0,
});
tl4.to(".client-content", {
    x: 0,
    opacity: 1,
});
tl4.from(".test-swiper", {
    y: 100,
    opacity: 0,
});
tl4.to(".test-swiper", {
    y: 0,
    opacity: 1,
});



let tl5 = gsap.timeline();


tl5.from(".footer-logo", {
    x: -100,
    opacity: 0,
});
tl5.to(".footer-logo", {
    x: 0,
    opacity: 1,
});
tl5.from(".footer-wrapper", {
    x: 100,
    opacity: 0,
});
tl5.to(".footer-wrapper", {
    x: 0,
    opacity: 1,
});
tl5.from(".footer-marquee", {
    x: 100,
    opacity: 0,
});
tl5.to(".footer-marquee", {
    x: 0,
    opacity: 1,
});
tl5.from(".footer-bottom", {
    y: -100,
    opacity: 0,
});
tl5.to(".footer-bottom", {
    y: 0,
    opacity: 1,
});

let testTl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".choose-us",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
});
testTl1.to(".choose-shape", {
    rotation: 360,
    y: 0,
    opacity: 1,
    stagger: 0.5,
});

let testTl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".choose-us",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
});
testTl2.to(".choose-shape2", {
    rotation: -360,
    y: 0,
    opacity: 1,
    stagger: 0.5,
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => {
        observer.observe(card);
    });
});


// Sudents reviews

var galleryThumbs = new Swiper('.gallery-thumbs', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '2',
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows : true,
    // },

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows: false,
    },

});


var galleryTop = new Swiper('.swiper-container.testimonial', {
    speed: 400,
    spaceBetween: 50,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    direction: 'vertical',
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});


//   contact form home js

// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     alert('Thank you for your message!');
// });
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function openTab(event, tabId) {
    let tabs = document.querySelectorAll(".tab-content");
    let tabButtons = document.querySelectorAll(".tab");

    tabs.forEach(tab => tab.classList.remove("active"));
    tabButtons.forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}


// contact form integration

// document.getElementById("contactForm").addEventListener("submit", function (event) {
//     event.preventDefault(); 

//     let formData = {
//         access_key: "0e96f553-c699-4295-93ac-689a84e6c65d", // Web3Forms API Key
//         email: document.querySelector("[name='email']").value,
//         name: document.querySelector("[name='name']").value,
//         country: document.querySelector("[name='country']").value,
//         phone: document.querySelector("[name='phone']").value,
//         course_type: document.querySelector("[name='course_type']").value,
//         message: document.querySelector("[name='message']").value,

//         // NEW: Send a copy of the email to your TL

//     };

//     fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 document.getElementById("success-message").style.display = "block";
//                 document.getElementById("contactForm").reset();
//             } else {
//                 alert("Error: " + data.message);
//             }
//         })
//         .catch(error => {
//             console.error("Error:", error);
//             alert("Submission failed. Check the console for details.");
//         });
// });


// enquiry form js
// function openModal() {
//     document.getElementById('enquireModal').style.display = 'block';
// }

// function closeModal() {
//     document.getElementById('enquireModal').style.display = 'none';
// }

// window.onclick = function (event) {
//     const modal = document.getElementById('enquireModal');
//     if (event.target === modal) {
//         closeModal();
//     }
// }

// const phoneInputField = document.querySelector("#phone");
// const phoneInput = window.intlTelInput(phoneInputField, {
//     initialCountry: "auto",
//     separateDialCode: true,
//     autoPlaceholder: "polite",
//     preferredCountries: ["us", "gb", "in"],
//     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
// });

// document.querySelector("#contactForm").addEventListener("submit", function (event) {
//     if (!phoneInput.isValidNumber()) {
//         event.preventDefault();
//         alert("Please enter a valid phone number.");
//     }
// });



// reiewshomelast what our studentsay

var swiper = new Swiper(".nitizreviewsslider", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nitizreviewsnext",
        prevEl: ".nitizreviewsprev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        }
    }
});




//    megamenu js
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu .has-dropdown > a");
    const menu = document.querySelector(".menu");

    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            let parentLi = this.parentElement;

            if (parentLi.classList.contains("active")) {
                parentLi.classList.remove("active");
            } else {
                document.querySelectorAll(".menu li.active").forEach(li => li.classList.remove("active"));
                parentLi.classList.add("active");
            }
        });
    });


    const menuLinks = document.querySelectorAll(".menu li:not(.has-dropdown) a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {

            document.querySelectorAll(".menu li.active").forEach(li => li.classList.remove("active"));
        });
    });


    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target)) {
            document.querySelectorAll(".menu li.active").forEach(li => li.classList.remove("active"));
        }
    });


    window.addEventListener("pageshow", function () {
        document.querySelectorAll(".menu li.active").forEach(li => li.classList.remove("active"));
    });
});



// learninghomejs
const isRTLCheck = (text) => {
    return /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/.test(text);
};

document.querySelectorAll('.learning-file-container').forEach((container) => {
    const text = container.querySelector('.learning-text');
    const textEffect = container.querySelector('.learning-text-effect');
    const title = container.querySelector('.learning-title');
    const description = container.querySelector('.learning-description');
    const borderColor = container.dataset.borderColor;
    const hoverTextColor = container.dataset.hoverTextColor;

    container.style.setProperty('--border-color', borderColor);
    container.style.setProperty('--hover-text-color', hoverTextColor);

    container.style.setProperty('--borderGradient', `conic-gradient(from var(--rotation), 
        var(--border-color) 0deg, 
        var(--border-color) 90deg, 
        var(--color-4) 90deg, 
        var(--color-4) 360deg)`);
    container.style.backgroundImage = `linear-gradient(#000, #000), var(--borderGradient)`;
    textEffect.style.backgroundColor = borderColor;

    // Check direction for title and description
    let isRTL = false;

    if (isRTLCheck(title.textContent)) {
        title.style.direction = 'rtl';
        isRTL = true;
    } else {
        title.style.direction = 'ltr';
    }

    if (isRTLCheck(description.textContent)) {
        description.style.direction = 'rtl';
        isRTL = true;
    } else {
        description.style.direction = 'ltr';
    }

    // Change font family if RTL is detected in the container
    if (isRTL) {
        container.style.fontFamily = "'Montserrat', sans-serif";
    }

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const angle = Math.atan2(y, x);
        container.style.setProperty("--rotation", `${angle}rad`);
    });
});


// Scrolltop to bottomicon
const scrollBtn = document.getElementById("scrollBtn");

function handleScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    if (nearBottom) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
}

window.addEventListener('scroll', () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    scrollBtn.textContent = nearBottom ? '⬆' : '⬇';
});


// Meet Instructor
const testimonials = [
    {
      quote: "18+ years of expertise in CCIE Security, FortiGate, and CCIE Data Center. Trained 10K+ students, with 4K+ CCIE successes.",
      name: "Mr. Nitiz Sharma",
      designation: "2X CCIE Certified Instructor",
      src: "image/Nitiz new.png",
      link: "nitiz-sharma.html",
      style: "white-space: nowrap;" 
    },
    {
      quote: "Delivered 100+ corporate trainings and trained 5K+ students, leading to 2K+ CCIE successes.",
      name: "Ms. Madhuri Suresh",
      designation: "CCIE Certified Expert Instructor",
      src: "image/Madhurii.png",
      link: "madhuri-suresh.html"
    },
    {
      quote: "A CCIE Data Center expert with eleven years of experience in networking, virtualization, storage, and cloud automation.",
      name: "Mr. Malav Sharma",
      designation: "CCIE Certified Expert Instructor",
      src: "image/malav 3.png",
      link: "malav-sharma.html"
    },
    {
      quote: "Expert in CCDP, CCNP, CyberOps, Fortinet NSE4 — proven security leader.",
      name: "Mr. Mohammad Gritli",
      designation: "CCIE Certified Expert Instructor",
      src: "image/Gritli 1.png",
      link: "mohammed-gritli.html"
    },
    {
      quote: "Cisco SD-Access, Wi-Fi 6, DevNet, CCIE & CWNE expert. 10+ years experience.",
      name: "Mr. Zakeer Khan",
      designation: "Expert Wireless Instructor",
      src: "image/Zakeer (1).png",
      link: "zakeer-khan.html"
    },
    {
      quote: "10+ years in AWS, CCNP, CCNA, Data Center, and practical training excellence.",
      name: "Mr. Kuldeep Sheokand",
      designation: "CCIE EI Expert Instructor",
      src: "image/kuldeep 1.png",
      link: "#"
    },
    {
      quote: "Specialist in SD-WAN, CCNP, Python automation, and real-world enterprise training.",
      name: "Mr. Joel Augustine",
      designation: "Expert SD-WAN Network Instructor",
      src: "image/Joel 1.png",
      link: "#"
    },
    {
      quote: "Specialist in CCNA & CCNP Certified Expert Instructor.",
      name: "Mr. DHANANJAY PATANKAR",
      designation: "CCNA & CCNP Certified Expert Instructor",
      src: "image/Dj 1.png",
      link: "#"
    }
  ];
  
  let activeIndex = 0;  // Ensure Mr. Nitiz Sharma's image is displayed first
  const imageContainer = document.getElementById("image-container");
  const nameElement = document.getElementById("name");
  const designationElement = document.getElementById("designation");
  const quoteElement = document.getElementById("quote");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  
  function updateTestimonial(direction = 0) {
    activeIndex = (activeIndex + direction + testimonials.length) % testimonials.length;
  
    testimonials.forEach((testimonial, index) => {
      let img = imageContainer.querySelector(`[data-index="${index}"]`);
      if (!img) {
        img = document.createElement("img");
        img.src = testimonial.src;
        img.alt = testimonial.name;
        img.classList.add("testimonial-image");
        img.dataset.index = index;
        imageContainer.appendChild(img);
      }
  
      const offset = (index - activeIndex + testimonials.length) % testimonials.length;
      const zIndex = testimonials.length - Math.abs(offset);
      const scale = index === activeIndex ? 1 : 0.85;
  
      let translateX, translateY, rotateY;
      if (offset === 0) {
        translateX = "0%";
        translateY = "0%";
        rotateY = "0deg";
      } else if (offset === 1 || offset === -2) {
        translateX = "20%";
        translateY = "-10%";
        rotateY = "-15deg";
      } else {
        translateX = "-20%";
        translateY = "-10%";
        rotateY = "15deg";
      }
  
      img.style.zIndex = zIndex;
      img.style.opacity = 1;
      img.style.transform = `translate(${translateX}, ${translateY}) scale(${scale}) rotateY(${rotateY})`;
    });
  
    const testimonial = testimonials[activeIndex];
    nameElement.textContent = testimonial.name;
    designationElement.textContent = testimonial.designation;
    quoteElement.innerHTML = testimonial.quote
      .split(" ")
      .map(word => `<span class="inline-block opacity-0 translate-y-2 blur-sm">${word}</span>`)
      .join(" ") +
      ` <a href="${testimonial.link}" target="_blank" class="text-black font-semibold underline ml-1">Read More...</a>`;
  
    animateWords();
  }
  
  function animateWords() {
    const words = quoteElement.querySelectorAll("span");
    words.forEach((word, index) => {
      setTimeout(() => {
        word.style.transition = "all 0.3s ease";
        word.style.opacity = "1";
        word.style.transform = "translateY(0)";
        word.style.filter = "blur(0)";
      }, index * 20);
    });
  }
  
  // Event listeners for navigation buttons
  prevButton.addEventListener("click", () => updateTestimonial(-1));
  nextButton.addEventListener("click", () => updateTestimonial(1));
  window.addEventListener("resize", () => updateTestimonial(0));
  
  // Ensure Mr. Nitiz Sharma's image is displayed first
  updateTestimonial(0);  // This forces the first image to show first
  
  // Autoplay functionality
  const autoplay = setInterval(() => updateTestimonial(1), 6000);
  [prevButton, nextButton].forEach(btn => btn.addEventListener("click", () => clearInterval(autoplay)));
  
  // IntersectionObserver to show Nitiz Sharma's image when entering the section
  const instructorSection = document.querySelector('.instructor-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeIndex = 0;  // Reset the index to Nitiz Sharma's image when section is in view
        updateTestimonial(0);  // Show Mr. Nitiz Sharma's image first when section is in view
      }
    });
  }, { threshold: 0.5 });  // Trigger when 50% of the section is visible
  
  observer.observe(instructorSection);
  


//   nodemailerjs


document.querySelector("#contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      fullName: document.querySelector('[name="Full Name"]').value,
      email: document.querySelector('[name="Email"]').value,
      phone: document.querySelector('[name="Phone Number"]').value,
      course: document.querySelector('[name="Course"]').value,
      message: document.querySelector('[name="Message"]').value
    };

    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      document.getElementById("success-message").style.display = "block";
    } else {
      alert("There was a problem submitting the form. Please try again.");
    }
  });