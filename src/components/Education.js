import React from 'react';
import { Grid, Typography } from '@mui/material';

const Education = ({ schoolName, programDescription }) => {
	return (
		<Grid container spacing={2}>
			{/* Left spacer (4 columns wide, hidden now since it was empty) */}
			{/* You can optionally add <Grid item xs={4}></Grid> if needed */}

			<Grid item xs={12} md={8}>
				<Typography variant="h6" sx={{ mt: 0 }}>
					{schoolName}
				</Typography>
				<Typography variant="body1">
					{programDescription}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Education;