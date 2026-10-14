$(document).ready(function () {
  const emptymessage = 'There are no more boxes to move!';
  const $leftcontainer = $('#left_container');
  const $rightcontainer = $('#right_container');
  function moveBox($from, $to) {
  const $box = $from.children('.box').first();

    if ($box.length == 0) {
      alert(emptymessage);
      return;
    }
    $box.appendTo($to);
  }
  $('#btn-move-right').on('click', function () {
    moveBox($leftcontainer, $rightcontainer);
  }
);
  $('#btn-move-left').on('click', function () {
    moveBox($rightcontainer, $leftcontainer);
  }
);
});