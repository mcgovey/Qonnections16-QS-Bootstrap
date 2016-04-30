define( [
	"text!./bootstrap.min.css"
],
function ( BS ) {
	$( "<style>" ).html( BS ).appendTo( "head" );
	return {
		paint: function ($element) {
			//create var for new div element		 
			var $bootstrapStyle = $( document.createElement( 'div' ) );
				//add button html to bootstrap variable
				$bootstrapStyle.html( '<button class="btn btn-primary">Bootstrappy goodness!</button><br/>' );
				//append bootstrap html to extension element
				$element.append( $bootstrapStyle );
		}
	};

} );