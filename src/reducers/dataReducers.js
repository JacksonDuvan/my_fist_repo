const INITIAL_STATE = {
     data: {},
     loading: false,
     error: null
}

export default ( state = INITIAL_STATE, action ) => {
	switch(action.type) {
		case 'traer_datos':
		    return { 
		    	...state, 
		    	data: action.payload,
		    	loading: false
            }
		case 'loading':
		    return { ...state, loading: true }
		case 'error':
		    return { ...state, error: action.payload, loading: false}

		default: return state
	}
}