var app = app || {};
app.Links = Backbone.Collection.extend({
    model: app.LinkModel,
    local:new Backbone.LocalStorage("links")
});
app.links=new app.Links();
console.log("collection init");