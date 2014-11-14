/**
 * Created by mohsom on 14.11.2014.
 */
require.config({
    baseUrl:"../",
    path:{
        jquery:"lib/jquery/jquery-2.1.1.min",
        underscore:"lib/underscore/underscore",
        backbone:"lib/backbone/backbone",
        local:"lib/backbone/local",
        text:"lib/require/text"
    }
});
require(["views/app"],function(app){
    var app_view=new app;
});