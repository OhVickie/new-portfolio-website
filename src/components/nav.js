import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<header class="header-links">
			<ul>
				<Link to="/resume"><li>Resume</li></Link>
				<Link to="/projects"><li>Projects</li></Link>
				<Link to="/contact"><li>Contact</li></Link>
			</ul>

		</header>
	);
}

export default Nav;