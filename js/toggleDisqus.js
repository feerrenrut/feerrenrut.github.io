$j=jQuery.noConflict();
// set up the click listeners
$j(document).ready(function(){
  toggleCommentsDisplay = function(){
    hideMe=$j('.commentToggle').filter(":visible");
    showMe=$j('.commentToggle').filter(":hidden");
    $j('#comments').fadeToggle(600);
    hideMe.fadeOut(200, function (){
      showMe.fadeIn(200);
    });
  };
  onCommentToggleClick=function(event){
    event.preventDefault();
    toggleCommentsDisplay();
  };
  $j('#showDisqus').click(onCommentToggleClick);
  $j('#hideDisqus').click(onCommentToggleClick);
  //set the initital state
  $j('#comments').hide();
  $j('#hideDisqus').hide();
});
