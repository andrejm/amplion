import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';
// import './lib/fakla_replacer';


$(document).foundation();



// Fakla replacer is script made for Jano Fakla to avoid certain short words in Slovak language to be left alone at the end of line. 
// updated with english shorts as well 
// idea https://harrison314.github.io/SlovakWyamTypography.html
// script https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
// tested with: https://regex101.com/

jQuery(document).ready(function($) {

	var pagecontent = $( 'p, li' );
	var result = '';
	var re = new RegExp('(\\s|^)(z|zo|bez|na|po|od|do|pri|pre|so|miesto|o|v|s|za|a|i|ani|aj|najprv|potom|ešte|ale|no|lež|jednako|alebo|buď|či|že|aby|čo|aký|ktorý|kde|keď|kým|kde|čo|akoby|lebo|pretože|predsa|the|of|at|in)(\\s+)([^\\p{Cc}\\p{Cf}\\p{Z}]+)', 'gi');

	function replaceAll(str, find, replace) {
	    return str.replace(find, replace);
	}

	$.each( pagecontent, function(i, iitem){
		/* console.log( iitem ); */
	  var $iitem = $(iitem);
		result = replaceAll($iitem.html(), re, '$1$2&nbsp;$4');
	  $iitem.html(result);
	  /* console.log(result); */
	  
	} );
	
});




$('.site-navigation').on( 'toggled.zf.responsiveToggle', function( e ) {
	// console.log( 'tooogle' );
	// console.log( e );
	let $this = $(this);
	let $topBar = $this.find('.top-bar');
	let openClass = 'menu-open';

	if( $topBar.is( ':visible' ) ) {
		// console.log( 'open' );
		$this.addClass( openClass );
	} else {
		// console.log( 'closed' );
		$this.removeClass( openClass );
	}
});