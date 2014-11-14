/**
 * Created by mohsom on 14.11.2014.
 */
define([
    "jquery",
    "underscore",
    "backbone",
    "collection/links",
    "views/linkView"
],function($,_,Backbone,linkCol,LView)
{
    var ColView=Backbone.View.extend({
        el:"#collection",
        initialize:function(initLinks)
        {
            this.collection=new linkCol;
            this.render();
        },
        render:function(){
            this.collection.each(function(item)
            {
                this.renderLink(item)
            },this);
        },
        renderLink:function(item)
        {
            var link=new LView({
               model:item
            });
            this.$el.append(link.render().el);
        }
    });
});
