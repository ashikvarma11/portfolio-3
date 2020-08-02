
window.onscroll = function () { stickyHeader() };
$("div.work-desc").hide();
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
let workPic1 = document.getElementById("work-pic1");
let workPic2 = document.querySelector("#work-pic2");
let workPic3 = document.querySelector("#work-pic3");

function stickyHeader() {
  if (window.pageYOffset > 10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
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
  console.log('1')
  toggleAnimation(tl_1,1)
});
workPic2.addEventListener('click', () => {
  console.log('2')
  toggleAnimation(tl_2,2)
});
workPic3.addEventListener('click', () => {
  console.log('3')
  toggleAnimation(tl_3,3)
});



gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ ease: 'none', duration: 2 });

// const tl = gsap.timeline();
// tl.from(".work2", { yPercent: 100 })
// .from(".work3", { yPercent: 100 });
// // .from(".work1", { xPercent: -100 });



gsap.utils.toArray('.works').forEach((work,i)=>{
  console.log(i)
  ScrollTrigger.create({
    trigger:work,
    start:"top 15%", 
    endTrigger:".work3",
    pinSpacing:false,
    pin:true,
    end:"bottom bottom",
    onLeave:()=>console.log('leave'),
    
  })
})
// ScrollTrigger.create({
//   animation: tl,
//   trigger: '.works',
//   start: 'top 25%',
//   end:"+=3000",
//   scrub: 3,
//   onLeave:()=>console.log('leave'),
//   pinSpacing:true,
//   pin: true,
//   // anticipatePin: 1
// })

// Hover effect on work exp
// $('#work-exp-1-dot').hover(()=>{
//   $('.work-exp-1').toggle();
// })
// let workExpTl = gsap.timeline();
// workExpTl.from(".work-exp-1-group",2, { opacity: 0 ,ease:Circ.easeOut});
// workExpTl.reversed( !myAnimation.reversed() )