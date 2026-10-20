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
  const results = data.query.search;
  const $list = $('#results_list');

  $list.empty();

  for (let i = 0; i < results.length; i++) {
    const item = results[i];
    const link = 'https://en.wikipedia.org/?curid=' + item.pageid;

    $list.append(
      '<li>' +
        '<a href="' + link + '" target="_blank">' + item.title + '</a>' +
        '<p>' + item.snippet + '</p>' +
      '</li>'
    );
  }
}
    });
  });
});