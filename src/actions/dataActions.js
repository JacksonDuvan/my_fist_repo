export const traerDatos = () => async dispatch => {
	dispatch({
		type: 'loading', 

	})
	try{
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=Uv3XqajXU5W9DgBGBEP1UMx4s4p79eomrqpmhufF')
		const data = await response.json()
		console.log(data)
		dispatch({
		    type: 'traer_datos',
		     payload: data
	   })
	}catch(error){
       dispatch({
       	type: 'error',
       	payload: error.message
       })
	}
}