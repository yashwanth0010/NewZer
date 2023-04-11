import React, { Component } from 'react';
import Toggle from './Toggle';
class NavBar extends Component {
    state = { 
	 } 

    render() { 
        return (
            <>
					<nav id="navbar" className="navbar navbar-expand-lg ">
						<div className="container-fluid">
							<a className="navbar-brand" href="/" style={{color:"black"}}><h4 className='txt'>NEWZER</h4></a>
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav me-auto mb-2 mb-lg-0">
											<li className="nav-item">
												<a className="nav-link active" aria-current="page" href="/" style={{color:"black"}}><p className='txt'>Home</p></a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="/" style={{color:"black"}}><p className='txt'>About</p></a>
											</li>
										</ul>
								<Toggle/>
							</div>
						</div>
					</nav>
					
    			</>
        );
    }
}
 
export default NavBar;

