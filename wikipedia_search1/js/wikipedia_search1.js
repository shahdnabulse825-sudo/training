$(document).ready(function () {
    const url = "https://en.wikipedia.org/w/api.php";
    const box = $("#search_input");
    const list = $("#results_list");

    let searchRequest = null;
    let searchNumber = 0;

    $("#search_button").click(function () {
        search();
    });

    box.keydown(function (e) {
        if (e.key === "Enter") {
            const menu = box.autocomplete("widget");

            if (menu.is(":visible")) {
                return;
            }

            e.preventDefault();
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
                    if (data && Array.isArray(data[1])) {
                        response(data[1]);
                    } else {
                        response([]);
                    }
                },
                error: function () {
                    response([]);
                }
            });
        },

        select: function (event, ui) {
            box.val(ui.item.value);
            search();
            return false;
        }
    });

    function search() {
        const text = box.val().trim();

        list.empty();

        searchNumber++;
        const currentSearch = searchNumber;

        if (searchRequest) {
            searchRequest.abort();
            searchRequest = null;
        }

        if (text === "") {
            return;
        }

        searchRequest = $.ajax({
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
                if (currentSearch !== searchNumber) {
                    return;
                }

                const results = data.query.search;

                if (results.length === 0) {
                    list.append("<li>No results found</li>");
                    return;
                }

                for (let i = 0; i < results.length; i++) {
                    const link =
                        "https://en.wikipedia.org/?curid=" +
                        results[i].pageid;

                    list.append(
                        "<li><a href='" + link +
                        "' target='_blank' rel='noopener noreferrer'>" +
                        results[i].title +
                        "</a><p>" + results[i].snippet +
                        "</p></li>"
                    );
                }
            },
            error: function (xhr, status) {
                if (status === "abort" ||
                    currentSearch !== searchNumber) {
                    return;
                }

                list.append("<li>Something went wrong</li>");
            }
        });
    }
});
