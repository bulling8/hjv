const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  swiper.on('slideChange', function () {
    const activSlideRaqami = swiper.realIndex; 

    const colors = [
        'linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)',
        'linear-gradient(to right, #cfd9df, rgb(107, 107, 107))',
        'linear-gradient(to right, #a8e063, #56ab2f)',
        'linear-gradient(to right, #ff512f, #dd2476)'
    ];

    if (activSlideRaqami >= 0 && activSlideRaqami < colors.length) {
        document.body.style.background = colors[activSlideRaqami];
    }
});
