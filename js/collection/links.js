var app = app || {};
var Links = Backbone.Collection.extend({
    model: app.LinkModel,
    localStorage: new Backbone.LocalStorage("links-app")
});
console.log("collection init");
app.links = new Links();