import React, { Component } from 'react';
import { Grid, Typography } from '@mui/material';
import Nav from './nav';
import SingleProjectItem from './SingleProjectItem.js';
import img3 from '../images/typing-code.svg';
import img2 from '../images/victorystray2 screenshot.PNG';
import img1 from '../images/newspage screenshot.PNG';

function Projects() {
	//constructor(props) {
	//super(props);
	//this.state = { activeTab: 0 };
	//}

	return (
		<div className="project-page">
			{/* <h1 className='project-page__heading'>PORTFOLIO</h1> */}

			<div className="project-page__cards">
				<div className="row row-cols-1 row-cols-md-2 g-4">
					<div className="col">
						<SingleProjectItem
							cardImage={img1}
							cardTitle="Bonkers"
							cardDescription="A React-powered website that fetches and displays the latest public tech and crypto news articles in real time."
							cardLink="https://ohvickie.github.io/news-page/"
						/>
					</div>

					<div className="col">
						<SingleProjectItem
							cardImage={img2}
							cardTitle="Victory's Tray"
							cardDescription="A modern and responsive restaurant website featuring a visual menu with photos, business hours and a contact form for customer inquiries and feedback"
							cardLink="https://ohvickie.github.io/Victorys-Tray/"
						/>
					</div>

				</div>

			</div>

		</div>

	);
}

export default Projects;
