/**
 * Created by mohsom on 14.11.2014.
 */
require.config({
    baseUrl: "../",
    paths: {
        jquery: "lib/jquery/jquery-2.1.1.min",
        underscore: "lib/underscore/underscore",
        backbone: "lib/backboneJS/backbone",
        local: "lib/backboneJS/local",
        text: "lib/require/text"
    }
});
require([
    "views/app"
], function (app) {
    var app_view = new app;
});