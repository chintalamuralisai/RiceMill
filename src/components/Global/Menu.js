import React, { Component } from 'react';


class Menu extends Component {
    constructor(){
        super();
        this.state={

        }
    }



    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-inverse navBg">
                <button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"  
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav  ">
                    <li className="nav-item ">
                        <a className="nav-link menustyles " href="/">
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link menustyles" href="#">
                        About us
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link menustyles " href="#">
                        24/7 Chat With
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                    <a
								className="nav-link dropdown-toggle menustyles"
								href=""
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
                                aria-expanded="false"
                                role="button"								
							>
                        Services
                        </a>
                            <ul 
                            className="dropdown-menu menustyles"
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Load Status
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item"href="#">
                                        Richmill Status
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item"href="#">
                                        Factory Status
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item"href="#">
                                        Worker's Status
                                    </a>
                                </li>
                            </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link menustyles" href="/newload">
                        Newload
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link menustyles"href="#">
                        Contact Us
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                    <a
										className="nav-link dropdown-toggle menustyles"
										href=""
										id="navbarDropdownMenuLink"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"										
									>
										Register
									</a>
                                    <ul
                                    className="dropdown-menu menustyles"
                                    aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <li>
                                            <a className="dropdown-item"href="#">
                                                    Agent
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item"href="#">
                                                    RiceMill
                                            </a>
                                        </li>   
                                        <li>
                                            <a className="dropdown-item"href="#">
                                                    Factory
                                            </a>
                                        </li>               
                                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link menustyles"href="#">
                        Login 
                        </a>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }


}
export default Menu;