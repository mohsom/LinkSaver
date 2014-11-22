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
        $('.delete-all').tooltip();
    },
    render: function () {
        $("#collection").html();
        app.links.each(function (item) {
            this.renderLink(item)
        }, this);
    },
    renderLink: function (item) {
        var link = new app.LinkView({
            model: item
        });
        $("#collection").prepend(link.render().el);
        var temp = _.template($("#link-counter").html());
        $(".link-count").html(temp({
            "length": app.links.length
        }));
    },
    events: {
        "click .add": "addLink",
        "click .delete-all": "deleteAll",
        "keypress .add": "addLinkByEnter",
        "keypress #title":"addLinkByEnter",
        "keypress #href":"addLinkByEnter"
    },
    deleteAll: function () {
        app.links.reset();
        window.localStorage.removeItem("links-app");
        console.log("delete");
        if (app.links.length == 0) {
            $("#header1").removeClass("disable");
        }
        var temp = _.template($("#link-counter").html());
        $(".link-count").html(temp({
            "length": app.links.length
        }));
        $("#collection").html("");
        console.log("deleteAll");
    },
    addLink: function () {
        var process=false;
        console.log("click!");
        if ((!(/^\s*$/).test($("#title").val())) && (!(/^\s*$/).test($("#href").val()))) {
            app.links.create(new app.LinkModel({
                title: $("#title").val(),
                href: $("#href").val()
            }));
            $("#titleid").removeClass("has-error");
            $("#hrefid").removeClass("has-error");
            process=true;
            console.log("href full,title full");
        }
        if (((/^\s*$/).test($("#title").val())) && ((/^\s*$/).test($("#href").val()))) {
            $("#titleid").addClass("has-error").val("").focus();
            $("#hrefid").addClass("has-error").val("");
            console.log("href empty,title empty");
        }
        if ((!(/^\s*$/).test($("#title").val())) && ((/^\s*$/).test($("#href").val()))) {
            $("#hrefid").addClass("has-error").val("").focus();
            $("#titleid").removeClass("has-error");
            console.log("href empty,title full");
        }
        if ((!(/^\s*$/).test($("#href").val())) && (((/^\s*$/).test($("#title").val())))) {
            $("#titleid").addClass("has-error").val("").focus();
            $("#hrefid").removeClass("has-error");
            console.log("href full,title empty");
        }
        var temp = _.template($("#link-counter").html());
        $(".link-count").html(temp({
            "length": app.links.length
        }));
        if(app.links.length>0){
            $("#header1").addClass("disable");
        }
        if(process)
        {
            $("#title").val("");
            $("#href").val("");
        }
    },
    addLinkByEnter: function (e) {
        if (e.keyCode == 13) {
            console.log("Enter click!");
            this.addLink();
        }
        else{
            return;
        }
    }
});
console.log("app view init");