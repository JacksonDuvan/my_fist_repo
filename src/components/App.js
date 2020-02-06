import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import DayAstronomy from './DayAstronomy'


function App(){

		return(
			<BrowserRouter>
			    <Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/DayAstronomy" component={DayAstronomy}/>
				</Switch>
			</BrowserRouter>
		);
}
export default App