//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require bootstrap-typeahead
//= require mvpready-core.js
//= require mvpready-admin.js
//= require nprogress
//= require nprogress-turbolinks

$.fn.doWait = function() {
  if (this.hasClass('waiting')){
    this.removeClass('waiting')    
  } else {
    this.addClass('waiting');
  }
};

function startFlashAnimation(){
  $('div.alert.flash').slideDown('slow');  
  
  setTimeout(function(){
    $('div.alert.flash').slideUp('slow');
  }, 2000);
}

var isMobile = {
  Android: function() {
    return /Android/i.test(navigator.userAgent);
  },
  BlackBerry: function() {
    return /BlackBerry/i.test(navigator.userAgent);
  },
  iOS: function() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },
  Windows: function() {
    return /IEMobile/i.test(navigator.userAgent);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
  }
};

var Paginate = {
  setPaginateCallBack: function(){
    $("a.paginate-link, a.next_page, a.previous_page").bind('ajax:success', function(evt, data, status, xhr) {
      $('#list-container').html(data);

      setTimeout(function(){
        Paginate.setPaginateCallBack();  
        mvpready_core.initTooltips();
        $('[data-toggle="popover"]').popover();  
      }, 100);
    });  
  }
};


$(document).on("ready page:change", function() {
  Paginate.setPaginateCallBack();
  startFlashAnimation();

  $('form').on('submit', function(){
    $(this).find('input[type="submit"]').prop("disabled", "disabled");
  });
});