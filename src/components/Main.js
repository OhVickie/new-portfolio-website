import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./Home";
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => (

	<Routes>
		<Route exact path="/" element={<Home />} />
		<Route path='/Projects' element={<Projects />} />
		<Route path='/Resume' element={<Resume />} />
		<Route path='/Contact' element={<Contact />} />
	</Routes>

)

export default Main;