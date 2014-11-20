var app = app || {};
app.LinkView = Backbone.View.extend({
    tagName: "div",
    className: "link-item",
    events: {
        "click .butl": "deleteL",
        "click .change-title": "changeTitle",
        "keypress .reset-title": "applyByEnter",
        "click .disable1": "applyByPencil"
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
        var text = this.$(".link-item-title").html();
        this.$(".link-item-title").html("<input type='text' class='reset-title' value="+text+" data-toggle='tooltip' data-placement='top' title='Press Enter to save'>").focus();
        this.$(".change-title").addClass("disable1");
        this.$(".change-title").removeClass("change-title");
        this.$('input[data-toggle="tooltip"]').tooltip();
    },
    applyByEnter: function (e) {
        if (e.keyCode == 13) {
            this.apply();
        }
    },
    applyByPencil:function(){
        this.apply();
    },
    apply:function(){
        if (((/^\s*$/).test($(".reset-title").val()))) {
            this.model.save({
                title: this.model.get("title"),
                href: this.model.get("href")
            });
        }
        else {
            this.model.save({
                title: $(".reset-title").val().trim(),
                href: this.model.get("href")
            });
        }
        this.$(".link-item-title").html(this.model.get("title"));
        this.$(".fa-pencil").removeClass("disable1").addClass("change-title");
    }
});
console.log("Link view init");

