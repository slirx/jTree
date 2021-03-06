/**
 * jTree - plugin for tree view
 * User: slirx
 * Date: 8/9/13
 * Time: 10:04 AM
 */

(function( $ ) {

    $.fn.jTree = function(options) {

        var settings = $.extend({
            hideTime : 500
        }, options);

        // hide all
        this.find(".literal .list").hide(0);

        this.find(".title").click(function() {

            if ($(this).hasClass("expanded"))
                return false;

            $(this).parent().parent().find(".title").removeClass("expanded");

            $(this).addClass("expanded");

            var el = $(this).parent();

            // hide all
           el.parent().find(".list").slideUp(settings.hideTime);

            // show selected
            el.find(".list").slideDown();
        });

        if(this.find(".active .list").size() > 0)
        {
            var el = this.find(".active .list");
            el.slideDown();
            el.parent().find(".title").addClass("expanded");
        }
        else
        {
            this.find(".list").first().slideDown();
            this.find(".title").first().addClass("expanded");
        }

        return this;
    };

})(jQuery);