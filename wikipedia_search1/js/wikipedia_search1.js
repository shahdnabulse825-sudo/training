$(function () {
  $('#search_button').on('click', function () {
    const term = $('#search_input').val();

    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php',
      data: {
        action: 'query',
        list: 'search',
        srsearch: term,
        srlimit: 10,
        format: 'json',
        origin: '*'
      },
      success: function (data) {
        console.log(data);
      }
    });
  });
});