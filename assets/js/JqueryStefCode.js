/**
 * jQuery StefCode plugin
 * v 1.0
 *
 * @author Stefanus Prasetyo Nugroho 
 * stefanusnugroho585@gmail.com
 */

+function($){
 
  $.fn.stefcode = function(options){
    var element = this;
    var codex = $.extend({
       "code": 67,
       "ctrlcode":83,
       "ctrlshift":73,
       "alt": 9,
       title:'!Oops',
      description:'Detect Ctrl+c',
      type:'success',
        },options);
    
    

    //kode plugin kita, tugasnya untuk menambahkan teks
   $(element).bind('contextmenu cut ', function(e) {
        e.preventDefault();
       swal('Oops!', 'Sorry Gan Klik Kanan nya Gak Bisa hehe!.', 'error'); setTimeout(1000);
        return false;
    });

   $(element).bind('keydown', function(e) {

        if (e.keyCode==codex.code) { // fungsi shortcut
                    
                 swal(codex.title,codex.description,codex.type);setTimeout(1000);
            return false;
               
         }
         
          if(e.ctrlKey&&(e.which==codex.ctrlcode))  {
            swal(codex.title,codex.description,codex.type)
            return false;
        }

        if(e.altKey && (e.which== codex.alt)) {
        	swal(codex.title,codex.description,codex.type)
            return false;
        }

   });
  };
 
}(jQuery);



