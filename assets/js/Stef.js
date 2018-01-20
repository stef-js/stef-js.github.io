/**
 * Stef.js
 * v 1.0
 *
 * @author Stefanus Prasetyo Nugroho 
 * stefanusnugroho585@gmail.com
 */

 function _st(target)
 {
 	return $(target);
 }

 function _a(a)
 {
 	alert(a);
 }

 function _menulis(writes)
 {
 	document.write(writes);
 }

 function _getTag(vartag)
 {
 	return document.getElementsByTagName(vartag);
 }

 function redirect(to)
 {
 	return window.location.assign(to);
 }

function _el(el)
{
	return document.createElement(el);
}
function _node(nod)
{
	return document.createTextNode(nod);
}
function _append(ab)
{
	return append(ab);
}

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
       "alt": 9,
       title:'!Oops',
      description:'Detect Ctrl+c',
      type:'success',
        },options);
    
    

    //kode plugin kita, tugasnya untuk menambahkan teks
   _st(element).bind('contextmenu cut ', function(e) {
        e.preventDefault();
       swal('Oops!', 'Sorry Gan Klik Kanan nya Gak Bisa hehe!.', 'error'); setTimeout(1000);
        return false;
    });
return this.each(function() {
   _st(element).bind('keydown', function(e) {

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
 });
  };
 
}(jQuery);

/*
  jQuery Countdown Redirect Plugin
*/
+function($){
 
  $.fn.stefcountdown = function(options){
    var element = this;
    var setting = $.extend({
       url: 'https://www.google.com/',
       "count":10,
       target:'#app',
       message:'sukses',
        },options);

 var pesan= setting.message;
 var el = setting.target;

function counter(message, url,time){
	var interval = setInterval(function(){
		
		_st(el).html(setting.message  + url + ' dalam ' + time + ' detik.');
		    time = time - 1;

		if(time == 0){
			clearInterval(interval);

			window.location = url;
		}
	}, 1000);
}

_st(document).ready(function(){
	
	counter(pesan, setting.url,setting.count);
});
  };
 
}(jQuery);

/*
  jQuery Slideshow Plugin
*/

(function($){
    $.stefSlideShow = function(selector, settings){
    // settings
    var config = {
      'delay': 1000,
      'fadeSpeed': 500
    };
    if ( settings ){$.extend(config, settings);}

    // variables
    var obj = $(selector);
    var img = obj.children('img');
    var count = img.length;
    var i = 0;

    // show first image
    img.eq(0).show();

    // run slideshow
    setInterval(function(){
      img.eq(i).fadeOut(config.fadeSpeed);
      i = ( i+1 == count ) ? 0 : i+1;
      img.eq(i).fadeIn(config.fadeSpeed);
    }, config.delay);
        
    return this;
  };
})(jQuery);


/* Create a new object based of the HTMLElement prototype
var XProductProto = Object.create(HTMLElement.prototype);

// Set up the element.
XProductProto.createdCallback = function() {
    // Create a Shadow Root
    var shadow = this.createShadowRoot();

    // Create a standard img element and set it's attributes.
    var img = document.createElement('img');
    img.alt = this.getAttribute('data-name');
    img.src = this.getAttribute('data-img');
    img.width = '150';
    img.height = '150';
    img.className = 'product-img';

    // Add the image to the Shadow Root.
    shadow.appendChild(img);

    // Add an event listener to the image.
    img.addEventListener('click', function(e) {
        window.location = this.getAttribute('data-url');
    });
  
    // Create a link to the product.
    var link = document.createElement('a');
    link.innerText = this.getAttribute('data-name');
    link.href = this.getAttribute('data-url');
    link.className = 'product-name';

        // Add the link to the Shadow Root.
    shadow.appendChild(link);
};

// Register the new element.
var XProduct = document.registerElement('x-product', {
    prototype: XProductProto
});
*/