import React from 'react'
import { Link } from 'react-router-dom'
import './styles/home.css'

class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <div></div>
                <div className="link_container">
                    <div className="btn">
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </div>
                    <div className="btn">
                        <Link className="link" to="/DayAstronomy">
                            DayAstronomy
                        </Link>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Home