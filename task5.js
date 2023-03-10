var t1 = gsap.timeline()
t1.from(".jhand",{
    y:100,
    duration:1,
    stagger:.5,
    opacity:0,

})

t1.from("#l5",{
    scale:.5,
    opacity:0,
    duration:1,
    y:200
})
t1.from("#nav, #s1info",{
    // scale:.5,
    opacity:0,
    duration:1,
    y:-100
})
// t1.from("",{
//    x:-200,
//    opacity:0,
//    duration:2,
//    oppacity:0
    
// })

var l1 = document.querySelector("#l1");
var l2 = document.querySelector("#l2");
var l3 = document.querySelector("#l3");
var l4 = document.querySelector("#l4");
var l5 = document.querySelector("#l5");

window.addEventListener("scroll",function(){
    var value = window.scrollY;
    document.querySelector("#s1info").style.left= value*-1.5+"px";
    l4.style.bottom = value*-.9+"px";
    l5.style.bottom = value*-.1+"%";
    // l1.style.height = 1+"%";
    l2.style.height = value*.9+"%";
    l1.style.height = value*.9+"%";
    l3.style.bottom = value*-.1+"%";

})

gsap.from(".card , #section2>h1",{
    scrollTrigger:{
        trigger:"#section2",
        scroll:"body",
        // markers:true,
        scrub:1,
        start:"top 60%",
        end:"bottom 80%"
    },
    x:200,
    opacity:0,
    duration:2,
    stagger:1
})


gsap.to(".card , #section2>h1 , #section2>p",{
    scrollTrigger:{
        trigger:"#section3",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 90%",
        end:"top 40%"
    },
    x:-200,
    opacity:0,
    duration:2,
    stagger:1
})

gsap.from(".cone>i",{
    scrollTrigger:{
        trigger:"#section3",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 30%",
        end:"bottom 90%"
    },
    y:-90,
    opacity:0,
    duration:2,
    stagger:1
})
gsap.from("#t2",{
    scrollTrigger:{
        trigger:"#section3",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 30%",
        end:"bottom 100%"
    },
    y:-100,
    opacity:0,
    duration:2,
    stagger:1
})
gsap.from("#t1",{
    scrollTrigger:{
        trigger:"#section3",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 30%",
        end:"bottom 100%"
    },
    x:-100,
    opacity:0,
    duration:2,
    stagger:1
})
gsap.from("#t3",{
    scrollTrigger:{
        trigger:"#section3",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 30%",
        end:"bottom 100%"
    },
    x:100,
    opacity:0,
    duration:2,
    stagger:1
})
gsap.from("#section3>img",{
    scrollTrigger:{
        trigger:"#section3",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 30%",
        end:"bottom 100%"
    },
    x:100,
    opacity:0,
    duration:2,
    stagger:1
})
gsap.from(".ani",{
    scrollTrigger:{
        trigger:"#section4",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 30%",
        end:"bottom 100%"
    },
    y:100,
    opacity:0,
    duration:2,
    stagger:1
})
gsap.from("#s4h1",{
    scrollTrigger:{
        trigger:"#section4",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 30%",
        end:"bottom 100%"
    },
    y:-100,
    opacity:0,
    duration:2,
    stagger:1
})
gsap.from("#s4h2",{
    scrollTrigger:{
        trigger:"#section4",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 10%",
        end:"bottom 100%"
    },
    y:100,
    opacity:0,
    duration:2,
    stagger:1
})
gsap.to("#section3>img , #t2 ,#t3",{
    scrollTrigger:{
        trigger:"#section4",
        scroll:" body",
        // markers:true,
        scrub:1,
        start:"top 80%",
        end:"bottom 30%"
    },
   y:-500,
   duration:2
})