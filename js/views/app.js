/**
 * Created by mohsom on 14.11.2014.
 */
var app = app || {};
app.ColView = Backbone.View.extend({
    el: "#collection",
    initialize: function (links) {
        app.links = new app.Links(links);
        this.listenTo(app.links, "add", this.renderLink);
        app.links.fetch();
        this.render();
    },
    render: function () {
        app.links.each(function (item) {
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
        console.log("click!");
        app.links.add(new app.LinkModel({
            title:$("#title").val(),
            href:$("#href").val()
        }));
    }
});
console.log("app view init");