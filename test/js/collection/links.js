var app = app || {};
app.Links = Backbone.Collection.extend({
    model: app.LinkModel,
    localStorage:new Backbone.LocalStorage("links") //not works
});
console.log("collection init");
app.links=new app.Links();