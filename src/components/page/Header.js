import React from 'react';
 
const Header = () => {
    return (
        <div>
            <div id="sub-header">
					<div className="container">
						<div className="row1">
							<div className="col-md-6 col-sm-12">
                            <div className="logo">
								<a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
							</div>
							</div>
							<div className="col-md-6 hidden-sm">
								<div className="right-info">
									<ul>
										<li><a href="/">ABOUT US</a></li>
										<li><a href="/">STORIES</a></li>
                                        <li><a href="/">CONTACT</a></li>
										<li><a href="/">LOGIN</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
            <header >
					<div id="main-header" className="main-header header-sticky">
						<div className="inner-header container clearfix">
							
							<div className="header-right-toggle pull-right hidden-md hidden-lg">
								<a href="javascript:void(0)" className="side-menu-button"><i className="fa fa-bars"></i></a>
							</div>
							<nav className="main-navigation text-center hidden-xs hidden-sm">
								<ul>
									<li><a href="index.html">Marketplace</a></li>
									<li><a href="about.html">Wholesale center</a></li>
									<li><a href="services.html">Seller center</a></li>
									<li><a href="/" className="has-submenu">Service</a>
										
									</li>
									<li><a href="/" className="">Intenship</a>
										
									</li>
									<li><a href="contact.html">Events</a></li>
									
								</ul>
							</nav>
						</div>
					</div>
				</header><hr />
        </div>
    );
}

 
export default Header;