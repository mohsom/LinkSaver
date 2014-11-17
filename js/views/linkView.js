var app = app || {};
app.LinkView = Backbone.View.extend({
    tagName: "div",
    className: "link-item",
    events: {
        "click .butl": "deleteL",
        "click .change-title": "changeTitle"
    },
    render: function () {
        var temp = _.template($("#link-template").html());
        this.$el.html(temp(this.model.toJSON()));
        return this;
    },
    deleteL: function () {
        this.model.destroy();
        this.remove();
        if (app.links.length == 0) {
            $("#header1").removeClass("disable");
        }
        var temp = _.template($("#link-counter").html());
        $(".link-count").html(temp({
            "length": app.links.length
        }));
    },
    changeTitle: function () {
        $(".link-item-title").attr('contentEditable', 'true’');
        var text = $(".link-item-title").html();
        $(".link-item-title").html("<input type='text' value=" + text + ">");

    }
});
console.log("Link view init");
