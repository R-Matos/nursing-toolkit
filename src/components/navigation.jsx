import React from 'react';

import { Route, NavLink, HashRouter, Link} from "react-router-dom";

import MainPage from "./mainPage";
import Allocation from "./allocation";
import Suggestion from "./suggestion";
import ErrorPage from "./errorPage";

class Navigation extends React.Component {
	render() {
		return (
		
		<HashRouter>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">

				<a className="navbar-brand" href="/">Nursing Toolkit</a>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
						</li>
						
						<li className="nav-item">
							
							<a className="nav-link" href="/#/allocation">Allocation</a>
					
						</li>						
					</ul>

					<Link to="/suggestion" className="btn btn-success my-2 my-sm-0 m-2">Give Suggestions</Link>

					<Link to="/report-an-error" className="btn btn-danger my-2 my-sm-0 m-2">Report an Error</Link>
					
				</div>
			</nav>

				<div className="content">
					<Route exact path="/" component={MainPage} />
					<Route path="/allocation" component={Allocation} />
					<Route path="/suggestion" component={Suggestion} />
					<Route path="/report-an-error" component={ErrorPage} />
				</div>
		</HashRouter> 

		
		)
	}


}

 /*            <li><NavLink to="/allocation">Allocation</NavLink></li>
            <li><NavLink to="/suggestion">Suggestion</NavLink></li>
            <li><NavLink to="/report-an-error">Error</NavLink></li> */
/* Navbar drop down
<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Dropdown
              				</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="/">Action</a>
								<a className="dropdown-item" href="/">Another action</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="/">Something else here</a>
							</div>
						</li>
*/

/* Navbar disabled
<li className="nav-item">
							<a className="nav-link disabled" href="/">Disabled</a>
						</li>
*/

/* Search bar
<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
*/


export default Navigation;

