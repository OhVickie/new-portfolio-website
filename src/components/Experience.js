import React, { Component } from "react";
import { Grid, Typography } from '@mui/material';

function Experience(props) {
	return (
		<Grid container className="experience-row">
			<Grid item xs={12} md={4}>
				<Typography variant="body2">
					{props.startMonthYear} - {props.endMonthYear}
				</Typography>
			</Grid>

			<Grid item xs={12} md={8}>
				<Typography variant="h6" sx={{ marginTop: 0 }}>
					{props.jobName}
				</Typography>
				<ul className="bulletList">
					<li>{props.jobDescription1}</li>
					<li>{props.jobDescription2}</li>
					<li>{props.jobDescription3}</li>
					<li>{props.jobDescription4}</li>
				</ul>
			</Grid>
		</Grid>
	);
}

export default Experience;
