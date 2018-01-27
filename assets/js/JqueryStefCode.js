/*
  jQuery StefCode with Sweet Alert Plugin
*/
+function($){
 
  $.fn.stefcode = function(options){
    var element = this;
    var codex = $.extend({
       "code": 67,
       "ctrlcode":83,
       "ctrlshift":73,
       "alt" : 9,
       swal  : false,
       alert : false,
       ModalBootstrap : false,
       AddAppend : false,
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
    
    

    //kode plugin kita, tugasnya untuk menambahkan teks
   $(element).bind('contextmenu cut ', function(e) {
        e.preventDefault();
       swal('Oops!', 'Sorry Gan Klik Kanan nya Gak Bisa hehe!.', 'error'); setTimeout(1000);
        return false;
    });
return this.each(function() {
   $(element).bind('keydown', function(e) {

        if (e.keyCode==codex.code ) { // fungsi shortcut
          if(codex.swal) {
            swal(codex.title,codex.description,codex.type);setTimeout(1000);
            return false;
          }
          if(codex.url){
            var link = codex.link;
            window.location = link;
            
          }
          if(codex.alert){
            alert(codex.textAlert);
            return false;
          }
          if(codex.ModalBootstrap) {
            var el = codex.TargetModal;
            $(el).modal();
          }
         if (codex.AddAppend) {
          var el1 = codex.Target;
          $(el1).append(codex.TextAppend);
         }
         if(codex.Audio){
          var el2 = codex.Target;
          var x = document.createElement("AUDIO");

          if (x.canPlayType("audio/mpeg")) {
              x.setAttribute("src",codex.AudioFile);
          } else {
              x.setAttribute("src","horse.ogg");
          }

          x.setAttribute("controls", "autoplay");
          $(el2).html(x); 
         }

         if(codex.Iframe){
          var el3 = codex.Target;
          var file = codex.IframeFile;
          $(el3).html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="' + file + '" allowfullscreen></iframe></div>')
         }

         if(codex.Video){
          var el4 = codex.Target;
          var a = codex.VideoFile;
          $(el4).html('<video width="320" height="240" autoplay><source src="' + a + '"  type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>');
         return false;
         }
          
           }       
           

            if(e.ctrlKey&&(e.which==codex.ctrlcode)) { // fungsi shortcut
           if(codex.swal) {
            swal(codex.title,codex.description,codex.type);setTimeout(1000);
            return false;
          }
          if(codex.url){
            var link = codex.link;
            window.location = link;
            return false;
          }
          if(codex.alert){
            alert(codex.textAlert);
            return false;
          }
          if(codex.ModalBootstrap) {
            var el = codex.TargetModal;
            $(el).modal();
            return false;
          }
         if (codex.AddAppend) {
          var el1 = codex.Target;
          $(el1).append(codex.TextAppend);
          return false;
         }

         if(codex.Audio){
          var el2 = codex.Target;
          var x = document.createElement("AUDIO");

          if (x.canPlayType("audio/mpeg")) {
              x.setAttribute("src",codex.AudioFile);
          } else {
              x.setAttribute("src","horse.ogg");
          }

          x.setAttribute("controls", "autoplay");
          $(el2).html(x); 
          return false;
         }

         if(codex.Iframe){
          var el3 = codex.Target;
          var file = codex.IframeFile;
          $(el3).html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="' + file + '" ></iframe></div>')
          return false;
         }

         if(codex.Video){
          var el4 = codex.Target;
          var a = codex.VideoFile;
          $(el4).html('<video width="100%" height="100%" controls><source src="' + a + '"  type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>');
         return false;
         }
        }

   });
 });
  };
 
}(jQuery);
