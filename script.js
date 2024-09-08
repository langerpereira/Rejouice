function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()

function cursorEffect() {
    var page1Content = document.querySelector(".page1-content");
    var cursor = document.querySelector(".cursor");
    const videoContainer = document.getElementById('fullscreen-video-container');
    const video = document.getElementById('bgVideo');
    const closeButton = document.getElementById('close-button');
  
 
    page1Content.addEventListener("mousemove", function(dets) {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y
      });
    });
  
    
    page1Content.addEventListener("mouseenter", function() {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1
      });
    });
  
   
    page1Content.addEventListener("mouseleave", function() {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0
      });
    });
  
    
    page1Content.addEventListener('click', () => {
      videoContainer.style.display = 'block';
      
      gsap.to(videoContainer, {
        opacity: 1,
        duration: 1
      });
  
      // Play the video
      video.play();
  
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.5
      });
    });
  
    // On click of the close button, hide the video container
    closeButton.addEventListener('click', () => {
      gsap.to(videoContainer, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          videoContainer.style.display = 'none'; 
        }
      });
  
      // Pause the video
      video.pause();
  
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.5
      });
    });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    cursorEffect();
  });
  
  


function page2Animation() {
    // Animate all elements on the page
    gsap.from(".elem h1", {
        y: 120,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page2",
            scroller:".main",
            start: "top 40%",//40
            end: "top 37%",//37
            // markers:"true",
            scrub: 2
        }
    });
}
page2Animation();



function page4cursor(){
    var cursor2 = document.querySelector(".page4 .cursor2");
var page4content = document.querySelector(".page4");

page4content.addEventListener("mousemove", function(dets) {
    gsap.to(cursor2, {
        x: dets.x , 
        y: dets.y
    });
});

page4content.addEventListener("mouseenter", function() {
    gsap.to(cursor2, {
        scale: 1,
        opacity: 1
    });
});

page4content.addEventListener("mouseleave", function() {
    gsap.to(cursor2, {
        scale: 0,
        opacity: 0
    });
});

}
page4cursor()


function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5, // Display multiple images per slide
        spaceBetween: 10, // Space between slides
        loop: true,
        loopedSlides: 5,
        autoplay: {
            delay: 200,
            disableOnInteraction: true,
        },
        speed: 900, // Adjust for smoother transitions
    });
}
swiper()


function page7TopAnim(){
    gsap.from(".page7 .page7-top .top-text h3", {
      y: 60,
      scrollTrigger:{
        scroller:".main",
        trigger:".page7 .page7-top .top-text h3",
        start:"top 100%",
        end:"top 95%",
        duration:.8,
        scrub:1
      }
    })
    gsap.to(".page7-top-border", {
      width: 94+"vw",
      scrollTrigger:{
        scroller:".main",
        trigger:".page7-top-border",
        start:"top 85%",
        end:"top 80%",
        duration:5,
        scrub:1
      }
    });
    gsap.from(".page7 .page7-bottom .btm-text h2", {
        y: -120,  // Animates from the top
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".page7",
          scroller: ".main",
          start: "top 60%",  // When to start the animation
          end: "top 27%", 
        //   markers:"true",   // When to end the animation
          scrub: 2
        }
      });     
  }
page7TopAnim()

var tl = gsap.timeline()

tl.from(".loader h3", {
    x:200,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to(".loader h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:0.1
})
tl.to(".loader",{
    opacity:0
})
tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
tl.to(".loader",{
    display:"none"
})
tl.from("footer .footer-bottom h1 span",{
    y: -120,  // Animates from the top
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: ".footer-bottom",
        scrollTrigger: {
          trigger: ".second ",
          scroller: ".main",
          start: "top 20%",  
          end: "top 2%", 
        //   markers:"true",   
          scrub: 2
        }
      });