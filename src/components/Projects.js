import React, { Component } from 'react';
import { Grid, Typography } from '@mui/material';
import Nav from './nav';
import SingleProjectItem from './SingleProjectItem.js';
import img2 from '../images/citrus-delicious-food-35063.jpg';
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
				<SingleProjectItem
					cardImage={img1}
					cardTitle="Bonkers"
					cardDescription="A React-powered website that fetches and displays the latest public tech and crypto news articles in real time."
					cardLink="https://ohvickie.github.io/news-page/"
				/>
				<SingleProjectItem
					cardImage={img2}
					cardTitle="Project 2"
					cardDescription="This is the project description"
					cardLink="https://github.com/OhVickie?tab=repositories"
				/>
				<SingleProjectItem
					cardImage={img2}
					cardTitle="Project 3"
					cardDescription="This is the project description"
					cardLink="https://github.com/OhVickie?tab=repositories"
				/>
			</div>

		</div>

	);
}

export default Projects;
