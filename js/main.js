/**
 * Created by mohsom on 14.11.2014.
 */
var app=app||{};
$(document).ready(function () {
    if (app.ColView) {
        console.log('new AppView', app);
        new app.ColView([{title:"Noname",href:"google.com"}]);
    } else {
        console.log('no AppView');
    }
});