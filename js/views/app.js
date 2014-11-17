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
        var temp= _.template($("#link-counter").html());
        $(".link-count").html(temp({
            "length":app.links.length
        }));
    },
    events: {
        "click .add": "addLink"
    },
    addLink: function (e) {
        e.preventDefault();
        console.log("click!");
        if(($("#title").val()!="")&&($("#href").val()!=""))
        {
            app.links.create(new app.LinkModel({
                title: $("#title").val(),
                href: $("#href").val()
            }));
        }
        if(($("#title").val()=="")&&($("#href").val()==""))
        {
            app.links.create(new app.LinkModel({
            }));
        }
        if(($("#title").val()!="")&&($("#href").val()=="")){
            app.links.create(new app.LinkModel({
                title:$("#title").val(),
                href: "Noname"
            }));
        }
        else if(($("#href").val()!="")&&($("#title").val()==""))
        {
            app.links.create(new app.LinkModel({
                title:"Noname",
                href:$("#href").val()
            }));
        }
        var temp= _.template($("#link-counter").html());
        $(".link-count").html(temp({
            "length":app.links.length
        }));
        $("#header1").addClass("disable");
        $("#title").val("");
        $("#href").val("");
    }
});
console.log("app view init");