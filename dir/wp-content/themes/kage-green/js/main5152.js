jQuery(document).ready(function(){

	// Sub-menu Hover
	jQuery('.menutop li').hover(function(){
		jQuery(this).children('a').addClass('hover');
		jQuery(this).children('.sub-menu').stop().slideDown(200);
	}, function(){
		jQuery(this).children('a').removeClass('hover');
		jQuery(this).children('.sub-menu').stop().slideUp(200);
	});
	
	// Menutopmob Drop Down
	jQuery('a.menuicon').click(function(eventObject) {
		eventObject.preventDefault();
	}).toggle(function(){
		jQuery(this).parents('.menucontainer').find('.menutopmob').stop().slideDown(200);
	}, function(){
		jQuery(this).parents('.menucontainer').find('.menutopmob').stop().slideUp(200);
	});

	// Input Focus
	jQuery(".search_form :text, .newsletter_form :text").focus(function(){
		var value = jQuery(this).attr("value");
		if (value == "")
		var attrfor = jQuery(this).attr('id');
		jQuery("label[for=" + attrfor + "]").css({"display":"none"});
	});
	jQuery(".search_form :text, .newsletter_form :text").blur(function(){
		var value = jQuery(this).attr("value");
		if (value == "")
		var attrfor = jQuery(this).attr('id');
		jQuery("label[for=" + attrfor + "]").css({"display":"block"});
	});
	
	// img_box hover
	jQuery('.img_box').hover(function(){
		jQuery(this).addClass('hover');
		jQuery(this).find('.overlay').stop().fadeIn(200);
	}, function(){
		jQuery(this).removeClass('hover');
		jQuery(this).find('.overlay').stop().fadeOut(200);
	});
	
	// Some Css Fix
	jQuery('.contact_info li:first-child, .menutop li:first-child').addClass('first');
	jQuery('.menutop li:last-child').addClass('last');			
	
}); //Final Ready