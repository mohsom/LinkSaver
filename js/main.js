/**
 * Created by mohsom on 14.11.2014.
 */
var app = app || {};
$(document).ready(function () {
    if (app.ColView) {
        console.log('new AppView', app);
        new app.ColView();
    } else {
        console.log('no AppView');
    }
    if (app.links.length !== 0) {
        $("#header1").addClass("disable");
    }
    var temp = _.template($("#link-counter").html());
    $(".link-count").html(temp({
        "length": app.links.length
    }));
});