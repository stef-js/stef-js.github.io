/*
jQuery Countdown
*/
+function($){
 
  $.fn.stefCountdown = function(options){
    var element = this;
    var setting = $.extend({
       date:'20 Oct,2018 00:01:01',
       message:'sukses',
       target:'#demo',
        swal  : false,
       alert : false,
       ModalBootstrap : false,
       
       Audio : false,
       Iframe : false,
       Video : false,
       VideoFile:'coba1.mp4',
       IframeFile:'index.html',
       TargetModal:'#mymodal',
       AudioFile: 'horse.ogg',
       TextAppend :'<p>hello world',
       Target:'#modal',
       textAlert:'Ditekan Keyboard',
       url   : false,
       link  : 'https://www.google.com/',
       title :'!Oops',
      description:'Detect Ctrl+c',
      type:'success',
        },options);

    var el = setting.target;
        // Set the date we're counting down to
var countDownDate = new Date(setting.date).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var week = Math.floor(distance / 60 / 60 / 24 / 7);
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    $(el).html(days + "\ndays " + hours + "\nhours "
    + minutes + "\nminutes " + seconds + "\nseconds ");
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        $('h1').html(setting.TextAppend);
        if(setting.swal){
          var coba = swal(setting.title,setting.description,setting.type);setTimeout(1000);
          $(el).html(coba);
            return false;
        }
        if(setting.alert){
          alert(setting.textAlert);
         
          return false;
        }
        if(setting.Audio){
           var xa = document.createElement("AUDIO");

          if (xa.canPlayType("audio/mpeg")) {
              xa.setAttribute("src",setting.AudioFile);
          } else {
              xa.setAttribute("src","horse.ogg");
          }

          xa.setAttribute("controls", "controls");
          $(el).html(xa); 
         
        }
        if(setting.Iframe){
          var file = setting.IframeFile;
           $(el).html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="' + file + '" allowfullscreen></iframe></div>')
        }
        if(setting.Video){
          var a = setting.VideoFile;
          $(el).html('<video width="320" height="240" controls><source src="' + a + '"  type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>');
        }
        if(setting.url){
           var link = setting.link;
            window.location = link;
        }


       
    }
}, 1000);



          };
 
}(jQuery);