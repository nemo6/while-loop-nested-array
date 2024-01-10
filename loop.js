
function mapLevel(m){

	let pool = [ { object:m, len:Object.keys(m).length, next:0 } ]

	let cycle = 0

	let level = 0

	let result = []

	while( pool.length ){

		console.log();console.log(m,level)

		result.push(m)

		if( typeof m == "object" ){

			console.log("typeof m == \"object\"")

			if ( cycle != 0 )
			pool.push( { object:m, len:Object.keys(m).length, next:0 } )
			
			m = m[ pool.at(-1).next ]
			level++

		}
		else{

			// console.log("else")
			let {object,len,next} = pool.at(-1)
			
			if( next + 1 < len ){

				// console.log("next+1")
				pool.at(-1).next += 1;m = object[next+1]

			}
			else
			{

				// console.log("pop()")
				pool.pop()
				level--

				if ( pool.length > 0 ){

					pool.at(-1).next += 1
				
					let {object,len,next} = pool.at(-1)

					if( next < len ){

						m = object[next]

					}

				}

			}

		}

		cycle++

		if( cycle > 1000 ) break

	}

	return result.slice(0,-1)

    /* while loop execute an other cycle after the break condition is true */

    /* the last result is stored twice because of the last additional cycle */

    /* .slice(0,-1) remove the unnecessary/duplicate last element */

}

let m = [
[2,3],
[4,5],
[6,7,[8,9]],
]

mapLevel(m)

// while loop nested array

function forEachNested( m ){
	// m = [m]
	while ( m.length ){
		let currentValue = m.shift()
		console.log("currentValue",currentValue)
		m.unshift( ... Object.values(currentValue) )
		console.log(m)
	}
}
