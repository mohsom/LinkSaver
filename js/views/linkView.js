/**
 * Created by mohsom on 14.11.2014.
 */
define([
    "jquery",
    "underscore",
    "backbone"
],function($,_,Backbone)
{
    var LinkView=Backbone.View.extend({
        tagName:"div",
        render:function()
        {
            var temp=$("#link-template").html();
            this.$el.html(temp(this.model.toJSON()));
            return this;
        }
    });
});
