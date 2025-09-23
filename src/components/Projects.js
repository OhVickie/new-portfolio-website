import React, { Component } from 'react';
import { Grid, Typography } from '@mui/material';
import Nav from './nav';
import SingleProjectItem from './SingleProjectItem.js';
import img1 from '../images/citrus-delicious-food-35063.jpg';

function Projects() {
	//constructor(props) {
	//super(props);
	//this.state = { activeTab: 0 };
	//}

	return (
		<div className="project-page">
			<h1 className='project-page__heading'>PORTFOLIO</h1>
			<div className="project-page__cards">
				<SingleProjectItem
					cardImage={img1}
					cardTitle="Project 1"
					cardDescription="This is the project description. This is the project description. This is the project description. This is the project description"
					cardLink="https://github.com/OhVickie?tab=repositories"
				/>
				<SingleProjectItem
					cardImage={img1}
					cardTitle="Project 2"
					cardDescription="This is the project description"
					cardLink="https://github.com/OhVickie?tab=repositories"
				/>
				<SingleProjectItem
					cardImage={img1}
					cardTitle="Project 3"
					cardDescription="This is the project description"
					cardLink="https://github.com/OhVickie?tab=repositories"
				/>
			</div>

		</div>

	);
}

export default Projects;
