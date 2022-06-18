//Get the button
let myButton = $("#btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
$(window).scroll(() => {
  if (
    $(this).scrollTop() > 30
  ) {
    myButton.show();
  } else {
    myButton.hide();
  }
});

// When the user clicks on the button, scroll to the top of the document
myButton.click(() => {
  $(document.body).scrollTop(0);
  $(document.documentElement).scrollTop(0);

});
