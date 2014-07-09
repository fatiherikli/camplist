$(document).on('touchstart mousedown','.to-do li',function(e){
  $(this).on('touchend mouseup',function(e){
    $(this).toggleClass('finished');
    var complete = true;
    $(this).parent().find('li').each(function(){
      if(!$(this).hasClass('finished'))
      {
        complete = false;
        return;
      }
    });
    if(complete) $(this).parent().attr('data-finished','FINISHED');
    else $(this).parent().attr('data-finished','UNFINISHED');
    $(this).off('touchend mouseup touchmove');
  });
  $(this).on('touchmove',function(e){
    $(this).off('touchend mouseup touchmove');
  });
});
$(document).on('touchstart mousedown','.to-do li',function(e){
  $(this).on('touchend mouseup',function(e){
    $(this).toggleClass('finished');
    var complete = true;
    $(this).parent().find('li').each(function(){
      if(!$(this).hasClass('finished'))
      {
        complete = false;
        return;
      }
    });
    if(complete) $(this).parent().attr('data-finished','FINISHED');
    else $(this).parent().attr('data-finished','UNFINISHED');
    $(this).off('touchend mouseup touchmove');
  });
  $(this).on('touchmove',function(e){
    $(this).off('touchend mouseup touchmove');
  });
    ;(function($) {
        $(function() {
            $('#my-button').bind('click', function(e) {
                e.preventDefault();
                $('#nottes').bPopup({
                    appendTo: 'form'
                    , zIndex: 2
                    , modalClose: false
                });
            });
         });
     })(jQuery);

    });