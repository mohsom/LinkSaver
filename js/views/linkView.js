var app = app || {};
app.LinkView = Backbone.View.extend({
    tagName: "div",
    className: "link-item",
    events: {
        "click .butl": "deleteL"
    },
    render: function () {
        var temp = _.template($("#link-template").html());
        this.$el.html(temp(this.model.toJSON()));
        return this;
    },
    deleteL: function () {
        this.model.destroy();
        this.remove();
    }
});
console.log("Link view init");
