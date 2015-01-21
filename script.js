$(function() {

  var current = 1; // [0,1,2]

  var $li = $('li'); // returns a special array
  console.log($li, $('.left'));

  $('.nav').on('click', function (event) {
    $li.removeClass('current left right');
    // current = current + ($(event.target).hasClass('right') ? 1 : -1);
    // current += 1;
    // current = current%3;
    current = ($(event.target).hasClass('right') ? ++current : --current)%3;
    current = current < 0 ? current + 3 : current;
    $li.forEach(function(item, index) {
      var state;
      switch(true) {
        case current === index:
          $(item).addClass('current');
          // state = 'current';
          break;
        case (current+1)%3 === index:
          $(item).addClass('right');
          // state = 'right';
          break;
        default:
          $(item).addClass('left');
          // state = 'left';
          break;
      }
      // $(item).addClass(state);
    });
  });

  $li.on('click', function (event) {
    console.log($(this).index());
  });

});