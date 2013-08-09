/**
 * jTree - plugin for tree view
 * User: slirx
 * Date: 8/9/13
 * Time: 10:04 AM
 */

(function( $ ) {

    $.fn.jTree = function() {

        // hide all
        this.find(".literal .list").hide(0);

        this.find(".title").click(function() {

            var el = $(this).parent();

            // hide all
           el.parent().find(".list").slideUp(500);

            // show selected
            el.find(".list").slideDown();
        });

        if(this.find(".active .list").size() > 0)
            this.find(".active .list").slideDown();
        else
            this.find(".list").first().slideDown();

        return this;
    };

})(jQuery);