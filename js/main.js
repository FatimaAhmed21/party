//slider//
$(".slide h3").click(function (e) {
  $(".slide p").not($(e.target).next()).slideUp(1000);
  $(e.target).next().slideToggle(1000);
});

//countDown implementation//
function countDown() {
  let countDownDate = new Date("27 november 2023 00:00:00").getTime() / 1000;
  let x = setInterval(function () {
    let currentDate = new Date().getTime() / 1000;
    let distanceTime = countDownDate - currentDate;

    let days = Math.floor(distanceTime / (60 * 60 * 24));
    let hours = Math.floor((distanceTime - days * (60 * 60 * 24)) / 3600);
    let minutes = Math.floor(
      (distanceTime - days * (24 * 60 * 60) - hours * 3600) / 60
    );
    let seconds = Math.floor(
      distanceTime - days * (24 * 60 * 60) - hours * 3600 - minutes * 60
    );
    $(".days").text(`${days} d`);
    $(".hours").text(`${hours} h`);
    $(".minutes").text(`${minutes} m`);
    $(".seconds").text(`${seconds} s`);
    if (distanceTime < 0) {
      clearInterval(x);
      $(".counter .content").html(`EXPIRED`);
    }
  }, 1000);
}
countDown();

// get remaining chars
function getRemaining() {
  $("textarea").keyup(function (e) {
    $(".message-lenght span").html(100 - e.target.value.length);
  });
}
getRemaining();


//sidebar
$(".open-btn").click(function () {
  $(".side-nav").animate({ width: "250px" }, 500);
  $(".open-btn").animate({ marginLeft: "250px" }, 500);
  $(".home .content").animate({ marginLeft: "250px" }, 500);
});

$(".close-btn").click(function(){
  $(".side-nav").animate({ width: "0px" }, 500);
  $(".open-btn").animate({ marginLeft: "0px" }, 500);
  $(".home .content").animate({ marginLeft: "0px" }, 500);
})

//scroll behavior
$(".side-nav a").click(function (e) {
  let sectionId = $(e.target).attr("href");
  let sectionOffset = $(sectionId).offset().top;
  $("html , body").animate({ scrollTop: sectionOffset }, 2000);
});
