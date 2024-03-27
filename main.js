window.addEventListener("load", (event) => {
  const timeline = anime.timeline({
    easing: "easeInSine",
    // duration: 750,
  });

  timeline.add({
    targets: "section",
    keyframes: [{ translateX: 75 }, { translateX: 0 }],
    duration: 500,
    // direction: "reverse",
    delay: anime.stagger(100),
  });
  timeline.add(
    {
      targets: "section",
      opacity: "100%",
      duration: 1000,
      delay: anime.stagger(100),
    },
    100
  );

  //   timeline.add(
  //     {
  //       targets: ".image",
  //       keyframes: [{ translateX: -300 }, { translateX: 0 }],
  //       duration: 300,
  //       // direction: "reverse",
  //     },
  //     100
  //   );

  timeline.add(
    {
      targets: ".image",
      opacity: "100%",
      duration: 750,
    },
    25
  );
  timeline.add(
    {
      targets: "h1",
      opacity: "100%",
      duration: 750,
    },
    25
  );
});
