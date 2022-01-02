var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        // triggerHook: "onLeave"
    }
});

var bg_pin = new ScrollMagic.Scene({
    triggerElement: "#section-1",
    triggerHook: "onLeave",
})
    .setPin(".bg-image")
    .addTo(controller);


var content_pin = new ScrollMagic.Scene({
    triggerElement: "#section-1",
    triggerHook: "onLeave"
})
    .setPin(".content")
    .addTo(controller);



var tween_swipe_text_up = TweenMax.staggerFromTo(
    "#section-1 .content h2 p:nth-child(1)", 1,
    { transform: 'translateY(0em) rotateY(0deg)', opacity: 1 },
    { transform: 'translateY(-0.25em) rotateY(45deg) scale(0.8)', opacity: 0 }, 0.4);

var swipe_text_up = new ScrollMagic.Scene({
    triggerElement: "#section-1 .trigger div:nth-child(2)",
    triggerHook: "onLeave",
    duration: "25%"
})
    .setTween(tween_swipe_text_up)
    .addIndicators()
    .addTo(controller);



var swipe_text_up = new ScrollMagic.Scene({
    triggerElement: "#section-1 .trigger div:nth-child(3)",
    triggerHook: "onLeave",
    duration: 0
})
    .setClassToggle(".content", "second")
    .removePin(".content")
    .addIndicators()
    .addTo(controller);


var swipe_text_up = new ScrollMagic.Scene({
    triggerElement: "#section-1 .trigger div:nth-child(3)",
    triggerHook: "onLeave",
    duration: "25%",
    offset: '1px'
})
    .setTween(
        TweenMax.staggerTo(
            "#section-1 .content h2 p:nth-child(2)", 1,
            { transform: 'translateY(0em) rotateY(0deg) scale(1.0)', opacity: 1 }, 0.4)
    )
    .addIndicators()
    .addTo(controller);


var swipe_text_up = new ScrollMagic.Scene({
    triggerElement: "#section-1 .trigger div:nth-child(4)",
    triggerHook: "onLeave",
    duration: "25%"
})
    .setTween(
        TweenMax.staggerTo(
            "#section-1 .content h2 p:nth-child(2)", 1,
            { transform: 'translateY(-0.125em)', opacity: 0 }, 0.4)
    )
    .addIndicators()
    .addTo(controller);


var scene1_bg_paralax = new ScrollMagic.Scene({
    triggerElement: "#section-1",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setTween(
        TweenMax.fromTo(
            "#section-1 .bg-image", 1,
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-100px)' })
    )
    .addTo(controller);
