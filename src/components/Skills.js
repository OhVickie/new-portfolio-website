import React, { Component } from 'react';
import { Grid, Typography } from '@mui/material';

function Skills(props) {
	return (
		<Grid container className="skill-row">
			<Grid item xs={12}>
				<Typography className="skill-text">
					{props.skill}
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Skills;