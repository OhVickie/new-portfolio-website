import React, { Component } from "react";
import { Grid, Typography } from '@mui/material';
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Nav from './nav';
//import JobDescription from './JobDescription';

function Resume() {
	return (

		<div id="resume-page">
			<h1 className="resume-page__heading">Resume</h1>
			<div className="resume-page__content">
				<div className="resume-section resume-section-1">
					<p>
						I'm a self-taught Full-Stack Developer with a background in SaaS support and technical analysis. I've always had a passion for software development,
						and working in technical support gave me a fresh perspective on software by seeing it through users' eyes—highlighting real-world pain points and
						usability gaps developers often miss.
					</p>
					<br></br>
					<p>
						Leveraging on that and my strong sense for aesthetics and interactions, I'm focused on developing full-stack applications,
						while continuing to learn best practices in clean code, responsive design, and backend architecture. I'm learning by doing—every day.
					</p>
				</div>

				<div className="resume-section resume-section-2 ">
					<h2>Soft Skills</h2>


					<ul className="bulletList">
						<li>Excellent communication skills </li>
						<li>Excellent ability to analyze, interpret and address customer needs</li>
						<li>Detail-oriented and motivated</li>
						<li>Eager to learn and develop new skills</li>
						<li>Ability to be flexible and adaptable</li>
					</ul>
				</div>

				<div className="resume-section resume-section-3">
					{/********************Education Section*********************/}
					<h2> Education</h2>
					<Education
						startYear={2012}
						endYear={2018}
						schoolName="University of Ottawa"
						programDescription="Bachelor of Applied Science in Computer Engineering (Co-Op)"
					/>
				</div>

				<div className="resume-section resume-section-4">
					{/********************Experience Section********************/}
					<h2>Experience</h2>

					<Experience
						startMonthYear="November 2023"
						endMonthYear="July 2024"
						jobName="Technical Analyst - Truecontext Inc."
						jobDescription1="Resolved complex issues across cloud platforms (AWS), mobile apps (iOS, Android, Windows), and SaaS integrations—sharpening backend problem-solving and frontend troubleshooting skills"
						jobDescription2="Interfaced with RESTful APIs and used tools like Postman to simulate and troubleshoot client-server interactions"
						jobDescription3="Worked closely with engineering teams to identify and replicate bugs by analyzing API responses, debug logs, and data formats (JSON/XML) and improve system behavior"
						jobDescription4="Authored help documentation that reduced recurring tickets—demonstrating clear technical communication, a key skill for writing clean code and developer documentation"
					/>

					<Experience
						startMonthYear="July 2020"
						endMonthYear="January 2023"
						jobName="Senior Technical Associate - Phreesia Inc."
						jobDescription1="Proactively engaged in troubleshooting and resolving technical issues related to API integrations for the Patient Management Intake software and advised clients on best practice"
						jobDescription2="Searched and retrieved data from various databases as part of the troubleshooting process"
						jobDescription3="Provided an outstanding experience to customers throughout the support process ensuring that SLAs were met, decreasing resolution time by over 10%"
						jobDescription4="Worked collaboratively with other senior resources to drive product understanding and knowledge"
					/>

					<Experience
						startMonthYear="November 2019"
						endMonthYear="July 2020"
						jobName="Sales Associate - Talbots Canada"
						jobDescription1="Demonstrated a high level of customer service skills to achieve sales. Demonstrated a high level of customer service skills to achieve sales"
						jobDescription2="Collaborated with team members to create and advance a culture of hospitality in the store"
						jobDescription3="Demonstrated forward-thinking and solution-orientation in order to meet customers needs"
						jobDescription4="Participated in fund-raising for the Dress for Success initiative to empower women returning to the workforce"
					/>

					<Experience
						startMonthYear="September 2018"
						endMonthYear="December 2018"
						jobName="Salesperson - Nordstrom Rack"
						jobDescription1="Surpassed daily sales targets by an average of 25% through efficiently and imaginatively merchandizing the sales floor and providing excellent customer service"
						jobDescription2="Reorganized the store inventory, making the system 20% more efficient than before"
						jobDescription3="Took initiative to recover and replenish merchandise, so it was available to sell"
						jobDescription4="Provided support to fellow employees through sharing of knowledge, helping to complete tasks and assisting in customer interactions"
					/>

					<Experience
						startMonthYear="January 2015"
						endMonthYear="December 2015"
						jobName="QA Analyst (Co-Op) - Ministry of Health and Long-term Care"
						jobDescription1="Provided technical support for the development team resulting in the successful deployment of two releases of the Panorama software into production"
						jobDescription2="Performed regression testing and user acceptance testing for new software features to ensure software stability"
						jobDescription3="Prepared detailed, comprehensive and well-structured test cases based on information provided in Detailed Business Requirements (DBRs)"
						jobDescription4="Maintained test documentation and identified, tracked and logged technical defects using ClearQuest"
					/>

				</div>

				{/********************Skills Section********************/}
				<div className="resume-section">

					<h2>Languages/Technologies/Tools/Platforms</h2>
					<Grid item xs={12} md={8} className="resume-section-5">
						<span className="resume-section-5__item language">
							<Skills skill="JavaScript" />
						</span>
						<span className="resume-section-5__item language">
							<Skills skill="HTML5" />
						</span>
						<span className="resume-section-5__item language">
							<Skills skill="CSS3" />
						</span>

						<span className="resume-section-5__item language">
							<Skills skill="SQL" />
						</span>

						<span className="resume-section-5__item language">
							<Skills skill="SASS" />
						</span>
						<span className="resume-section-5__item frontend-tech">
							<Skills skill="React" />
						</span>

						<span className="resume-section-5__item frontend-tech">
							<Skills skill="Bootstrap" />
						</span>

						<span className="resume-section-5__item backend-and-databases">
							<Skills skill="NodeJS" />
						</span>

						<span className="resume-section-5__item backend-and-databases">
							<Skills skill="Express.js" />
						</span>

						<span className="resume-section-5__item backend-and-databases">
							<Skills skill="PostgreSQL" />
						</span>

						<span className="resume-section-5__item tools-and-platforms">
							<Skills skill="Git" />
						</span>

						<span className="resume-section-5__item tools-and-platforms">
							<Skills skill="Postman" />
						</span>

						<span className="resume-section-5__item tools-and-platforms">
							<Skills skill="Adobe Photoshop CC" />
						</span>

						<span className="resume-section-5__item tools-and-platforms">
							<Skills skill="Adobe XD" />
						</span>

						<span className="resume-section-5__item tools-and-platforms">
							<Skills skill="UX Prototyping" />
						</span>

						<span className="resume-section-5__item tools-and-platforms">
							<Skills skill="Wireframing" />
						</span>





					</Grid>
				</div>

			</div>

		</div>
	);
}

export default Resume;
