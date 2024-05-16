import React, { useRef } from 'react'

function RefExample() {
	const inputRef = useRef(null)

	return (
		<>
			<h1 ref={inputRef}> I am inevitable </h1>
			<button onClick={() => (inputRef.current.style.display = 'none')}>
				And I Am Iron Man
			</button>
		</>
	)
}

export default RefExample
