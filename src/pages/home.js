import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <Link to="/DayAstronomy">Day astronomy</Link>
                <br/>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Home