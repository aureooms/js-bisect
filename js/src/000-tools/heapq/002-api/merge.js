
const merge = function* ( compare , ...iterables ) {

	const x = [ ] ;

	for ( let [ order , it ] of enumerate( map( iter , iterables ) ) ) {

		const rv = next( it ) ;

		if ( rv.done ) continue ;

		x.push( [ rv.value , order , it ] ) ;

	}

	const h = heapify( keeporder( compare ) , x ) ;

	while ( x.length > 1 ) {

		while ( true ) {

			const s = h[0] ;

			const [ value , order , it ] = s ;

			yield value ;

			const rv = next( it ) ;

			if ( rv.done ) break ;

			s[0] = rv.value ;

			heapreplace( h , s ) ;

		}

	}

	if ( x.length > 0 ) {

		const [ value , order , it ] = h[0] ;

		yield value ;

		yield *it ;

	}

} ;

heapq.merge = merge ;