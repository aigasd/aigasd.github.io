<!-- GSAP (necessary for ScrollMagic -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>

<!-- ScrollMagic -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js"></script>
<script type="text/javascript" src="scrollmagic/uncompressed/plugins/debug.addIndicators.js"></script>

<!--
<script>
  // init controller
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
    }
  });

  //create a timeline
  var slideAnimation = new TimelineLite();

  // define movement of panels
  slideAnimation.to(".panel-left", 1, {x: "-100%"})                // slide left
                .to(".panel-right", 1, {x: "100%"}, "-=1")         // slide right
                .to(".overlay", 0.3, {scale:4, opacity:0}, "-=1")  // scale and fade
                .to(".intro-arrow", 0.3, {opacity:0}, "-=1");      // fade

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      duration: "100%"
    })
    .setPin("body")
    .setTween(slideAnimation)
    .addTo(controller);
</script>
-->