document.addEventListener("DOMContentLoaded", () => {

  /* ============================
      FADE IN ANIMATION
  ============================= */
  if ("IntersectionObserver" in window) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    const fades = document.querySelectorAll(".fade");
    fades.forEach(el => fadeObserver.observe(el));
  }


  /* ============================
      TESTIMONIAL AUTO SLIDER
  ============================= */
  const testimonials = [
    {
      img: "assets/images/t1.jpg",
      date: "December 01, 2019",
      text: "Working with JK Photography was one of the best decisions we made for our wedding. From start to finish, everything was perfect.",
      name: "KIRAN + SHRUTI"
    },
    {
      img: "assets/images/t2.jpg",
      date: "March 14, 2020",
      text: "The team captured every emotion beautifully. The photos are timeless and full of life. Highly recommended!",
      name: "RAHUL + ANITA"
    },
    {
      img: "assets/images/t3.jpg",
      date: "July 22, 2021",
      text: "Professional, creative, and extremely friendly. JK Photography truly understands moments and emotions.",
      name: "ARJUN + PRIYA"
    }
  ];

  let index = 0;

  const img = document.getElementById("testimonialImg");
  const date = document.getElementById("testimonialDate");
  const text = document.getElementById("testimonialText");
  const name = document.getElementById("testimonialName");
  const count = document.getElementById("testimonialCount");

  if (img && date && text && name && count) {

    function autoScrollTestimonial() {

      img.style.opacity = "0";
      date.style.opacity = "0";
      text.style.opacity = "0";
      name.style.opacity = "0";

      setTimeout(() => {
        index = (index + 1) % testimonials.length;

        img.src = testimonials[index].img;
        date.innerText = testimonials[index].date;
        text.innerText = testimonials[index].text;
        name.innerText = testimonials[index].name;
        count.innerText = `0${index + 1} / 03`;

        img.style.opacity = "1";
        date.style.opacity = "1";
        text.style.opacity = "1";
        name.style.opacity = "1";
      }, 800);
    }

    count.innerText = "01 / 03";
    setInterval(autoScrollTestimonial, 6000);
  }


  /* ============================
      COUNTER NUMBER ANIMATION
      → Visible aana time mattum
      → First time mattum
  ============================= */
  const counters = document.querySelectorAll(".counter");

  if ("IntersectionObserver" in window) {

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("done")) {

          const counter = entry.target;
          const target = +counter.getAttribute("data-target");
          let current = 0;
          const step = Math.ceil(target / 100);

          const run = setInterval(() => {
            if (current >= target) {
              clearInterval(run);
              counter.innerText = target + "+";
            } else {
              current += step;
              counter.innerText = current;
            }
          }, 30);

          counter.classList.add("done");
        }
      });
    });

    counters.forEach(c => counterObserver.observe(c));
  }


  /* ============================
      PHILOSOPHY BAR ANIMATION
      (If section exists)
  ============================= */
  const philosophySection = document.getElementById("philosophy");
  let barsAnimated = false;

  function animateBars() {
    if (barsAnimated) return;
    barsAnimated = true;

    const bars = document.querySelectorAll(".fill");
    const percents = document.querySelectorAll(".percent");

    bars.forEach((bar, index) => {
      let target = parseInt(bar.getAttribute("data-percent"));
      bar.style.width = target + "%";

      let count = 0;
      let counter = setInterval(() => {
        if (count >= target) {
          clearInterval(counter);
        } else {
          count++;
          percents[index].innerText = count + "%";
        }
      }, 20);
    });
  }

  if (philosophySection && "IntersectionObserver" in window) {
    const barObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateBars();
        barObserver.unobserve(philosophySection);
      }
    }, { threshold: 0.4 });

    barObserver.observe(philosophySection);
  }

});

/*---albums section---*/
const albums = {
1:[1,2,3,4,5,6,7,8,9,10],
2:[11,12,13,14,15,16,17,18,19,20],
3:[21,22,23,24,25,26,27,28,29,30],
4:[31,32,33,34,35,36,37,38,39,40]
};

let currentAlbum=[];
let index=0;

function openAlbum(num){
  currentAlbum = albums[num];
  index=0;
  showPhoto();
  document.getElementById("modal").style.display="flex";
}

function showPhoto(){
  document.getElementById("modalImg").src =
  `https://picsum.photos/1000/700?random=${currentAlbum[index]}`;
}

function nextPhoto(){
  index = (index+1)%currentAlbum.length;
  showPhoto();
}

function prevPhoto(){
  index = (index-1+currentAlbum.length)%currentAlbum.length;
  showPhoto();
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

  /* ============================
           booking form
  ============================= */
function submitBooking(){

let name = document.getElementById("name").value.trim();
let mobile = document.getElementById("mobile").value.trim();
let date = document.getElementById("date").value;

// hide all error first
document.getElementById("nameError").style.display = "none";
document.getElementById("mobileError").style.display = "none";
document.getElementById("dateError").style.display = "none";

let error = false;

if(name === ""){
  document.getElementById("nameError").style.display = "block";
  error = true;
}

if(mobile === ""){
  document.getElementById("mobileError").style.display = "block";
  error = true;
}

if(date === ""){
  document.getElementById("dateError").style.display = "block";
  error = true;
}

// stop submit if any error
if(error) return;

// success popup
document.getElementById("successBox").style.display = "flex";

setTimeout(()=>{
  window.location.href="index.html";
},3000);

}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});