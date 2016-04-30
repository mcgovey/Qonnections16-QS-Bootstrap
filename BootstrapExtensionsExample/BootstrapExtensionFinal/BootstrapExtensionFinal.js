define( [
	"text!./scoped-bootstrap.css"
],
function ( BS ) {
	'use strict';
	$( "<style>" ).html( BS ).appendTo( "head" );
	return {
		paint: function ($element) {
			//add your rendering code here
			// $element.html( "BootstrapExtensionFinal" );			 
			var $bootstrapStyle = $( document.createElement( 'div' ) );
				$bootstrapStyle.addClass( 'bootstrap_inside' );
				$bootstrapStyle.html( '<button class="btn btn-primary">Bootstrappy goodness!</button><br/>' );
				$element.append( $bootstrapStyle );
		}
	};

} );

