/**
 * Created by mohsom on 14.11.2014.
 */
var app = app || {};
app.ColView = Backbone.View.extend({
    el: "#collection",
    events: {
        "click button": "addLink"
    },
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
    addLink: function (e) {
        e.preventDefault();
        console.log("dta");
        var formData = {};
        $("form").children("input").each(function (i, el) {
            if ($(el).val != "") {
                formData[el.id] = $(el).val();
            }
        });
        this.collection.add(new app.LinkModel(formData));
    }
});
console.log("app view init");