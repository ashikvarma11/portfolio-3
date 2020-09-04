
window.onscroll = function () { stickyHeader() };
$("div.work-desc").hide();
let navbar = document.getElementById("navbar");
let mobile_nav = document.getElementById("mobile-nav");
let sticky = navbar.offsetTop;
let workPic1 = document.getElementById("work-pic1");
let workPic2 = document.querySelector("#work-pic2");
let workPic3 = document.querySelector("#work-pic3");

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
let clickExpandH1 = document.querySelectorAll(".work-pic h1");

const hamburger_lines = document.querySelectorAll(".hamburger .line");

hamburger.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  navLinks.classList.toggle("open");
  hamburger_lines.forEach(line=>line.classList.toggle("white_lines"));
  links.forEach(link => {
    link.classList.toggle("fade");
  });
}

function stickyHeader() {
  
  if (window.pageYOffset > 10) {
    navbar.classList.add("sticky");
    mobile_nav.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    mobile_nav.classList.remove("sticky");
  }
}

function toggleAnimation(timeline,number){
  timeline.reversed(!timeline.reversed());
  $(`div.work-desc${number}`).toggle("slow", "swing")
}
let tl_1 = TweenLite.to('#work-pic1', 1, {
  width: window.innerWidth / 3,
}).reversed(true);
let tl_2 = TweenLite.to('.work-pic-2', 1, {
  width: window.innerWidth / 3,
}).reversed(true);
let tl_3 = TweenLite.to('.work-pic-3', 1, {
  width: window.innerWidth / 3,
}).reversed(true);

workPic1.addEventListener('click', () => {
  toggleAnimation(tl_1,1)
});
workPic2.addEventListener('click', () => {
  toggleAnimation(tl_2,2)
});
workPic3.addEventListener('click', () => {
  toggleAnimation(tl_3,3)
});

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.works').forEach((work,i)=>{
  ScrollTrigger.create({
    trigger:work,
    start:"top 15%", 
    endTrigger:".work3",
    pinSpacing:false,
    pin:true,
    end:"bottom bottom",
    onEnter:()=>{
      $(`.work-dots`).show();
      $(`.dot${i+1}`).addClass('active');
    
    },
    onLeave:()=>{$(`.work-dots`).hide()},
    
  })
})

$(".my_work").click(function() {
  toggleMobileMenu();
  $('html, body').animate({
      scrollTop: $(".works-container").offset().top
  }, 2000);
});

$(".about_me").click(function() {
  toggleMobileMenu();
  $('html, body').animate({
      scrollTop: $(".about").offset().top
  }, 2000);
});

$(".contact_me").click(function() {
  toggleMobileMenu();
  $('html, body').animate({
      scrollTop: $(".contact").offset().top
  }, 2000);
});

$("#website_logo").click(function() {
  $('html, body').animate({
      scrollTop: 0
  }, 2000);
});