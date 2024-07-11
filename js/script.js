
$('.overlay').css({
    'width': '100%',
    'height': '100%',
    'background-color': '#d62e3399'
});

$('.nav-bar').css({
    'height': '100vh',
    'width': '0',
    'background-color': '#000000',
    'position': 'fixed',
    'overflow': 'hidden'
});

$('.nav-bar ul').css({
    'list-style': 'none'
});

$('.nav-bar a').css({
    'color': '#ffffff',
    'text-decoration': 'none',
    'padding': '5px'
});


$('header h1').css('font-size','65px')

// $('#nav-btn').click(()=>{
//     $('.nav-bar').animate({
//         width:'15%',
//     })
// })
$('#nav-btn').click(()=>{
    $('.nav-bar').animate({
        width:'15%',
    }, 300);
    $('#nav-btn-container').animate({
        right: '15%'
    }, 300);
})

$('#close-btn').click(()=>{
    $('.nav-bar').animate({
        width:'0%',
    }, 300);
    $('#nav-btn-container').animate({
        right: '10px'
    }, 300);
})

$('.nav-bar ul li').css({'font-size':'30px',
    'padding':"15px"
})
$('#close-btn').click(()=>{
    $('.nav-bar').animate({
        width:'0%',
    })
})

$(".singer-name1").click(function() {
    $(".singer-desc1").slideToggle();
    $(".singer-desc2, .singer-desc3, .singer-desc4").slideUp();
});
$(".singer-name2").click(function() {
    $(".singer-desc2").slideToggle();
    $(".singer-desc1, .singer-desc3, .singer-desc4").slideUp();
});
$(".singer-name3").click(function() {
    $(".singer-desc3").slideToggle();
    $(".singer-desc1, .singer-desc2, .singer-desc4").slideUp();
});
$(".singer-name4").click(function() {
    $(".singer-desc4").slideToggle();
    $(".singer-desc1, .singer-desc2, .singer-desc3").slideUp();
});


var countDownDate = new Date("Jul 15, 2024 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days + "d" 
  document.getElementById("hour").innerHTML = hours + "h" 
  document.getElementById("min").innerHTML = minutes + "m" 
  document.getElementById("sec").innerHTML = seconds + "s" 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "-" 
  document.getElementById("hour").innerHTML ="-" 
  document.getElementById("min").innerHTML = "-" 
  document.getElementById("sec").innerHTML ="-"  
  }
}, 1000);
const textarea=document.getElementById('message')
const remainingSpan=document.getElementById('char-remaining')
textarea.addEventListener('keyup',handleKeyUp)
handleKeyUp();
function handleKeyUp() {
    const currentLength=textarea.value.length
    const remainingLength=100-currentLength
    remainingSpan.innerHTML=remainingLength

}