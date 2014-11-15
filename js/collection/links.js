var app = app || {};
app.Links = Backbone.Collection.extend({
    model: app.LinkModel,
    //local:new Backbone.localStorage("links")
});
app.Links1=new app.Links();

