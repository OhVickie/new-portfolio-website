import React from 'react';

function Home() {
    return (
        <div className="home-grid">
            <div className="home-grid__content">
                <div className='captions'>
                    <div className="main-caption">
                        <span className="main-caption__top">Hello! I'm Victory—a full-stack developer and web designer</span>
                        {/* <h1 className="main-caption__top">Hello, I'm Victory.</h1> */}
                        {/* <h1 className="main-caption__top">Hello,</h1>
                        <h1 className="main-caption__bottom">I'm <span>Victory.</span></h1> */}
                    </div>
                    <div className="sub-caption">
                        {/* <h4 >
                            Self-taught full-stack developer and web designer
                        </h4> */}
                        {/* <p > <span>I love beautiful things and have a strong sense for aesthetics and interactions and so pursuing a part of software development
                            that was related to this just made sense to me.</span></p> */}
                        <div className='animated-paragraph'>
                            <p className='animated-paragraph__p1'>Crafting clean, responsive, and <span>user-focused</span> applications
                            </p>
                            {/* <p className='animated-paragraph__p2'>
                                Welcome to my journey!
                            </p> */}

                            {/* <p className='animated-paragraph__p1'> I love beautiful things and have a strong sense for aesthetics and interactions.
                            </p>
                            <p className='animated-paragraph__p2'>From front-end design to back-end logic, I enjoy crafting clean, responsive, and
                            </p>
                            <p className='animated-paragraph__p3'>
                                user-focused applications. Welcome to my journey!
                            </p> */}
                        </div>


                    </div>
                </div>

                <div className="social-links">
                    <a href="https://github.com/OhVickie?tab=repositories" rel="noopener noreferrer" target="_blank">
                        VIEW MY PROJECTS
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Home;