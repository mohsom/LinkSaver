/**
 * Created by mohsom on 14.11.2014.
 */
var app = app || {};
app.ColView = Backbone.View.extend({
    el: "#collection",
    initialize: function (links) {
        this.collection = new app.Links(links);
        this.listenTo(this.collection, "add", this.renderLink);
        this.render();
    },
    render: function () {
        this.collection.each(function (item) {
            this.renderLink(item)
        }, this);
    },
    renderLink: function (item) {
        var link = new app.LinkView({
            model: item
        });
        this.$el.append(link.render().el);
    },
    events: {
        "click .add": "addLink"
    },
    addLink: function (e) {
        e.preventDefault();
        this.collection.add(new app.LinkModel({
            title:$("#title").val(),
            href:$("#href").val()
        }));
    }
});
console.log("app view init");