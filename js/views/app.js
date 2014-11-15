/**
 * Created by mohsom on 14.11.2014.
 */
var app = app || {};
app.ColView = Backbone.View.extend({
    el: "#collection",
    initialize: function () {
        this.listenTo(app.links, "add", this.renderLink);
        this.listenTo(app.links, "reset", this.render);
        app.links.fetch();
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
        $("#header1").addClass("disable");
    }
});
console.log("app view init");