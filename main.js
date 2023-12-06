/* Sticky Navigation */

let navBar = $(".navbar");

$(window).scroll(function () {
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navBar.addClass("sticky");
  } else {
    navBar.removeClass("sticky");
  }
  console.log("Test");
  // To see the position of the scroll
  // $('section-2').offset().top
});

/* Counter Animation */
let numberCounter = function (selector) {
  $(selector).each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};

let a = 0;
$(window).scroll(function () {
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a === 0 && $(window).scrollTop() >= oTop) {
    a++;
    numberCounter('.rect>h1');
  }
});
