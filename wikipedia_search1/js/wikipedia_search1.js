$(document).ready(function () {
    const url = "https://en.wikipedia.org/w/api.php";
    const box = $("#search_input");
    const list = $("#results_list");
    $("#search_button").click(function () {
        search();
    });

    box.keydown(function (e) {
        if (e.key == "Enter") {
            box.autocomplete("close");
            search();
        }
    });
    box.autocomplete({
        minLength: 3,
        source: function (request, response) {
            $.ajax({
                url: url,
                data: {
                    action: "opensearch",
                    search: request.term,
                    format: "json",
                    origin: "*"
                },
                success: function (data) {
                    response(data[1]);
                }
            });
        }
    });
    function search() {
        const text = box.val();
        if (text == "") {
            return;
        }
        list.empty();
        $.ajax({
            url: url,
            data: {
                action: "query",
                list: "search",
                srsearch: text,
                srlimit: 5,
                format: "json",
                origin: "*"
            },
            success: function (data) {
                const results = data.query.search;
                if (results.length == 0) {
                    list.append("<li>No results found</li>");
                }
                for (let i = 0; i < results.length; i++) {
                    const link = "https://en.wikipedia.org/?curid=" + results[i].pageid;
                    list.append(
                        "<li><a href='" + link + "' target='_blank'>" +
                        results[i].title +
                        "</a><p>" + results[i].snippet + "</p></li>"
                    );
                }
            },
            error: function () {
                list.append("<li>something went wrong</li>");
            }
        });
    }
});