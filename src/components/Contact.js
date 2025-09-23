import React, { Component, useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import Nav from './nav';
import emailjs from '@emailjs/browser';
import OfficeImg from '../images/office-space.jpg';


function Contact(props) {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_m4zs2m3', 'template_hyhern8', form.current, 'i9ttmQCT7Cr1KwGI6')
			.then((result) => {
				console.log(result.text);

			}, (error) => {
				console.log(error.text);
			});
	};

	const submitInfo = () => {
		alert("Submitted!");
	}

	return (

		<div className="contact-page">
			{/* <div className="u-margin-bottom-medium"> */}
			<div >
				<h2 className="contact-page__heading">
					Let's Connect
				</h2>
			</div>

			<div className="contact-page__text">
				{/* <img className="contact-img" src={OfficeImg}></img> */}

				<div className="contact__form text-center">

					{/* <h4 className="card-title">{props.formTitle}</h4> */}


					<form ref={form} onSubmit={sendEmail}>
						<input className="form__input form__input--name form__input--firstname"

							type="text"
							name="user_firstname"
							placeholder="FirstName"
						></input>

						<input className="form__input form__input--name form__input--lastname"

							type="text"
							name="user_lastname"
							placeholder="LastName"
						></input>

						<input className="form__input form__input--email"

							type="text"
							name='user_email'
							placeholder="Email"
						></input>

						<input
							className="form__input form__input--message"
							type="text"
							name='message'
							placeholder="Message"></input>

						<div className="">
							<button className="submit__btn btn btn-outline-primary" onClick={submitInfo}>Submit</button>
						</div>

					</form>
					<img></img>

				</div>

			</div>

		</div>

	)
}


export default Contact;


