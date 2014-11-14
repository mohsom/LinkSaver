/**
 * Created by mohsom on 14.11.2014.
 */
define([
    "jquery",
    "underscore",
    "backbone",
    "collection/links",
    "views/linkView",
    "models/link"
],function($,_,Backbone,linkCol,LView,Link)
{
    var ColView=Backbone.View.extend({
        el:"#collection",
        events:{
            "click .add":"addLink"
        },
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
        },
        addLink:function(e)
        {
            e.preventDefault();
            var formData={};
            $("form").children("input").each(function(i,el)
            {
                if($(el).val!="")
                {
                    formData[el.id]=$(el).val();
                }
            });
            this.collection.add(new Link(formData));
        }
    });
    return ColView;
});
