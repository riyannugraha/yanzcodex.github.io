

// Navbar

$(window).bind('scroll', function () {
  if ($(window).scrollTop() < 200) {
    $('.navbar').removeClass('fixed');        
    $('#bg').removeClass('fixed-bg');     
    $(".ee").css("color", "#007FFF");
    $('#up').css('display', 'none');
    $('.profile-item').css({
      'border': '2px solid white',
      'transition': '2s',
      'box-shadow': '0 0 5px white'
    });  
    $('.works-item').css('border', 'none');
    $('.about-item').css('border', 'none');
    $('.link-item').css('border', 'none');
    $('.contact-item').css('border', 'none');
  } 
  else if($(window).scrollTop() <= 1000){
    $('.navbar').addClass('fixed'); 
    $('#bg').addClass('fixed-bg');        
    $(".ee").css("color", "black");
    $("#up").css({
      "display": "block",
      "position":"fixed",
      "z-index": "9999",
      "transition": "1s"
    });
    $('.works-item').css({
      'border-bottom': '3px solid red',
      'transition': '2s'
    });  
    $('.about-item').css('border', 'none');
    $('.link-item').css('border', 'none');
    $('.contact-item').css('border', 'none');
    $('.profile-item').css('border', 'none');
  } 

  else if($(window).scrollTop() <= 2000){
    $('.navbar').addClass('fixed');        
    $('#bg').addClass('fixed-bg');
        // $("body").addClass('bgku');
        $(".ee").css("color", "white");
        $("#up").css({
          "display": "block",
          "position":"fixed",
          "z-index": "9999",
          "transition": "1s"
        });
        $('.about-item').css({
          'border-bottom': '3px solid red',
          'transition': '2s'
        });
        $('.works-item').css('border', 'none');
        $('.link-item').css('border', 'none');
        $('.contact-item').css('border', 'none');
        $('.profile-item').css('border', 'none');
      } 

      else if($(window).scrollTop() <= 2500){
        $('.navbar').addClass('fixed');        
        $('#bg').addClass('fixed-bg');
        // $("body").addClass('bgku');
        $(".ee").css("color", "black");
        $("#up").css({
          "display": "block",
          "position":"fixed",
          "z-index": "9999",
          "transition": "1s"
        });
        $('.link-item').css({
          'border-bottom': '3px solid red',
          'transition': '2s'
        });
        $('.works-item').css('border', 'none');
        $('.about-item').css('border', 'none');
        $('.contact-item').css('border', 'none');
        $('.profile-item').css('border', 'none');
      } 

      else if($(window).scrollTop() <= 4000){
        $('.navbar').addClass('fixed');        
        $('#bg').addClass('fixed-bg');
        // $("body").addClass('bgku');
        $(".ee").css("color", "white");
        $("#up").css({
          "display": "block",
          "position":"fixed",
          "z-index": "9999",
          "transition": "1s"
        });
        $('.contact-item').css({
          'border-bottom': '3px solid red',
          'transition': '2s'
        });
        $('.works-item').css('border', 'none');
        $('.link-item').css('border', 'none');
        $('.about-item').css('border', 'none');
        $('.profile-item').css('border', 'none');
      } 

      else {
        $('.navbar').removeClass('fixed');        
        $('#bg').removeClass('fixed-bg');        
        // $("body").removeClass('bgku');
        $(".ee").css("color", "#007FFF");
        $('#up').removeClass('up');
      }
    });




// Lottie
var animation = bodymovin.loadAnimation({
  container: document.getElementById('bg'),
  rederer:'svg',
  loop: true,
  autoplay: true,
  path: 'main/bgku.json'
});


var animation = bodymovin.loadAnimation({
  container: document.getElementById('up'),
  rederer:'svg',
  loop: true,
  autoplay: true,
  path: 'main/up.json'
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById('cycle'),
  rederer:'svg',
  loop: true,
  autoplay: true,
  path: 'main/cycle.json'
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bg2'),
  rederer:'svg',
  loop: true,
  autoplay: true,
  path: 'main/security.json'
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById('call'),
  rederer:'svg',
  loop: true,
  autoplay: true,
  path: 'main/call.json'
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById('icon-loading'),
  rederer:'svg',
  loop: true,
  autoplay: true,
  path: 'main/loading.json'
});


// Animation Typing
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Welcome to My Website", "My Name is Riyan Nugraha", "usually called Riyan", "Im From Bandung", "I Live in Antapani Street"];
const typingDelay = 50;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



