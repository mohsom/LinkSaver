/**
 * Created by mohsom on 14.11.2014.
 */
var app = app || {};
app.ColView = Backbone.View.extend({
    el: "body",
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
        $("#collection").append(link.render().el);
        var temp = _.template($("#link-counter").html());
        $(".link-count").html(temp({
            "length": app.links.length
        }));
    },
    events: {
        "click .add": "addLink",
        "click .delete-all":"deleteAll"
    },
    addLink: function (e) {
        e.preventDefault();
        console.log("click!");
        if ((!(/^\s*$/).test($("#title").val())) && (!(/^\s*$/).test($("#href").val()))) {
            app.links.create(new app.LinkModel({
                title: $("#title").val(),
                href: $("#href").val()
            }));
            console.log("href full,title full");
        }
        if (((/^\s*$/).test($("#title").val())) && ((/^\s*$/).test($("#href").val()))) {
            app.links.create(new app.LinkModel({
                title: "Noname",
                href: "Noname"
            }));
            console.log("href empty,title empty");
        }
        if ((!(/^\s*$/).test($("#title").val())) && ((/^\s*$/).test($("#href").val()))) {
            app.links.create(new app.LinkModel({
                title: $("#title").val(),
                href: "Noname"
            }));
            console.log("href empty,title full");
        }
        if ((!(/^\s*$/).test($("#href").val())) && (((/^\s*$/).test($("#title").val())))) {
            app.links.create(new app.LinkModel({
                title: "Noname",
                href: $("#href").val()
            }));
            console.log("href full,title empty");
        }
        var temp = _.template($("#link-counter").html());
        $(".link-count").html(temp({
            "length": app.links.length
        }));
        $("#header1").addClass("disable");
        $("#title").val("");
        $("#href").val("");
    },
    deleteAll:function(){
        app.links.reset({});
    }
});
console.log("app view init");