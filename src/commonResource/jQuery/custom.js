let tagEl = $("footer h3");
function slider(e) {
  let childEl = $("footer ul");
  if ($(window).width() < 768) {
    e.preventDefault();
    childEl.slideToggle();
    childEl.toggleClass("expanded");
  }
}
tagEl.on("click", slider);
$(window).on("resize", function () {
  location.reload();
});
