import React from 'react';
import './styles/DayAstronomy.css';
// import PageLoading from './PageLoading';
import { connect } from 'react-redux';
import * as dataActions from '../actions/dataActions'
import Home from '../pages/Home'
// import img from '../images/starts2.jpg';


class DayAstronomy extends React.Component{

	// state = {
	// 	data:{},
	// 	loading: true,
	// };
    
    componentDidMount(){
		if(!this.props.data.length){
            this.props.traerDatos()
		}
	};

	
    // fetchData = async () =>{
    // 	this.setState({ loading: true })
    //     try{
    //       const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=Uv3XqajXU5W9DgBGBEP1UMx4s4p79eomrqpmhufF')
    //       const data = await response.json()
    //       console.log(data)
    //       this.setState({ loading: false,data: data })
    //    }catch(error){
    //       console.log('API no encontrada')
    //    }
    // }
	render(){
		// console.log(this.props)
		// console.log(this.props.loading)
		// console.log(this.props.error)
		if(this.props.loading){
			return (
                <div className="center">
					<div className="lds-dual-ring center"></div>
				</div>
			)
		}

		if(this.props.error){
			return this.props.error
		}
		const datos = this.props.data
		return(
			<div className='day__astronomy'>
	            <h1>{datos.title}</h1>
				<img className="img__astronomy" src={datos.hdurl} alt='Imagen astronomica'/>
				<p className="parrafo">{datos.explanation}</p>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return state.dataReducers
}

export default connect(mapStateToProps, dataActions)(DayAstronomy);