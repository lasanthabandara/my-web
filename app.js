$(document).ready(function () {
    $('#content-head nav a').each(function (index, item) {
        if (item.href == window.location.href) {
            $(item).addClass('active').siblings().removeClass('active');
        }
        if (window.location.pathname == '/' && index == 0) {
            $(item).addClass('active').siblings().removeClass('active');
        }
    });
});