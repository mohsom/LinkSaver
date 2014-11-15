var app = app || {};
app.Links = Backbone.Collection.extend({
    model: app.LinkModel,
    local:new Backbone.LocalStorage("links")
});
console.log("collection init");