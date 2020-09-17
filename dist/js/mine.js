// source https://codepen.io/shaikmaqsood/pen/XmydxJ
// copy Text to Clipboard
function copyToClipboard(element) {
   var $temp = $("<input>");
   $("body").append($temp);
   $temp.val($(element).text()).select();
   document.execCommand("copy");
   $temp.remove();
}

// Alert
var Alert_closeBtn = $(".alert-closeable button.close");

$(document).ready(function() {
   Alert_closeBtn.click(function() {
    $(this).parent().removeClass("show"); 
    $(this).parent().addClass("hide"); 
   });
});

// btn
var btnToggle = $("[data-toggle=button]");
$(document).ready(function () {
   btnToggle.click(function () {
      $(this).attr('aria-pressed',$(this).attr('aria-pressed')==='true'?'false':'true' );
      $(this).toggleClass("active").toggleClass("focus");
   });
});

// Dropdown
var dropDwn = $(".dropdown");
var dropBtn = $("[data-toggle=dropdown]");
var dropContent = $("#main-drop");
$(document).ready(function () {
   dropDwn.click(function () {
      $(this).find(dropBtn).attr('aria-expanded',$(this).find(dropBtn).attr('aria-expanded')==='true'?'false':'true' );
      $(this).find(dropBtn).toggleClass("active").toggleClass("focus");
      $(this).find(dropContent).toggleClass('show hide');
   });
});