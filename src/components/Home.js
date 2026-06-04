import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-grid">
            <div className="home-grid__content">
                <div className='captions'>
                    <div className="main-caption">
                        <span className="main-caption__top">Hello! I'm Victory—a full-stack developer and web designer</span>
                        {/* <div className="main-caption__part1">Hello, I'm <span>Victory.</span></div>
                        <div className="main-caption__part2">a full-stack developer and</div>
                        <div className="main-caption__part3">web designer</div> */}
                    </div>
                    <div className="sub-caption">

                        {/* <p > <span>I love beautiful things and have a strong sense for aesthetics and interactions and so pursuing a part of software development
                            that was related to this just made sense to me.</span></p> */}
                        <div className='animated-paragraph'>
                            <p className='animated-paragraph__p1'>Crafting clean, responsive, and <span>user-focused</span> applications
                            </p>

                        </div>


                    </div>
                </div>

                <div className="social-links">
                    <Link to="/Projects">
                        VIEW MY PROJECTS
                    </Link>
                    {/* <a href="https://github.com/OhVickie?tab=repositories" rel="noopener noreferrer" target="_blank">
                        VIEW MY PROJECTS
                    </a> */}

                </div>

            </div>
        </div>
    );
}

export default Home;