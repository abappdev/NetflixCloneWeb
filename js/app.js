$(function () {
    var tabs = $('#features > nav a');
    var tabscontent = $('#features > article >section');


    tabs.click(function (e) {
        e.preventDefault();
        var that = $(this);
        tabs.removeClass('is-selected');
        that.addClass("is-selected");
        tabscontent.remove('is-selected');

        tabscontent.filter((i, tab) => $(tab).data('id') === that.data('id'))
            .addClass('is-selected');
    })




});