/**
 * Created by mohsom on 14.11.2014.
 */
define([
    "backbone",
    "local",
    "models/link"
],function(Backbone,local,LinkModel)
{
    var Links=Backbone.Collection.extend({
        model:LinkModel,
        local:new Backbone.local("links")
    });
});
