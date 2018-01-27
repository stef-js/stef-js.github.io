+function($){
 
  $.fn.stefRedirectPage = function(options){
    var element = this;
    var setting = $.extend({
       url: 'https://www.google.com/',
       "count":10,
       message:'sukses',
        },options);

 var pesan= setting.message;   
function counter(message, url,time){
	var interval = setInterval(function(){
		
		$('#pesan').html(setting.message  + url + ' dalam ' + time + ' detik.');
		    time = time - 1;

		if(time == 0){
			clearInterval(interval);
			window.location = url;
		}
	}, 1000);
}

$(document).ready(function(){
	
	counter(pesan, setting.url,setting.count);
});
  };
 
}(jQuery);
