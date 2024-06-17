import React, { useState, useEffect } from 'react';

// icons
// import { ReactComponent as GitIcon } from '../images/github-brands.svg';
// import { ReactComponent as LiveIcon } from '../images/video-solid.svg';

// projects
import projectList from '../projects.json';

const Projects = () => {
    const [toggle, setToggle] = useState(false);
    const [current, setCurrent] = useState(projectList.projects[0]);
    const [resize, setResize] = useState(false);
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setResize(false);
        } else { setResize(true); }
    }

    const handleSetClick = (e) => {
        setCurrent(projectList.projects[e.target.getAttribute("data-quote")])
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        handleResize()
    },[])

    return (
        <>
            <div className="Work">
                <div className="Work__container">
                    <h1 className="Work__container__title">Portfolio</h1>
                    <div className="Work__container__projects">
                        {resize ? projectList.projects.map((item) => {
                            return (
                                <>
                                    <div className="Work__container__projects__container" key={item.id}>
                                        <div className="Work__container__projects__container__imageContainer"
                                            onMouseOver={() => setToggle(true)}
                                            onMouseLeave={() => setToggle(false)}
                                        >
                                            <a href={item.url}><img className="Work__container__projects__container__imageContainer__image" src={item.image} alt="" /></a>
                                            {toggle && <div className="Work__container__projects__container__imageContainer__lang">
                                                <h3>{item.content}</h3>
                                                <p>Languages used: {item.languages}</p>
                                            </div>}
                                        </div>
                                        <h3 className="Work__container__projects__container__title">{item.title}</h3>
                                        {/* <a className="Work__container__projects__container__icon" href={item.gitUrl}><GitIcon /></a>
                                        <a className="Work__container__projects__container__icon" href={item.url}><LiveIcon /></a> */}
                                    </div>
                                </>
                            )
                        }) :
                            <>
                                <div className="Work__container__projects__container">
                                    <div className="Work__container__projects__container__imageContainer"
                                        onMouseOver={() => setToggle(true)}
                                        onMouseLeave={() => setToggle(false)}
                                    >
                                        <a href={current.url}><img className="Work__container__projects__container__imageContainer__image" src={current.image} alt="" /></a>
                                        {toggle && <div className="Work__container__projects__container__imageContainer__lang">
                                            <h3>{current.content}</h3>
                                            <p>Languages used: {current.languages}</p>
                                        </div>}
                                    </div>
                                    <h3 className="Work__container__projects__container__title">{current.title}</h3>
                                    {/* <a className="Work__container__projects__container__icon" href={current.gitUrl}><GitIcon /></a>
                                    <a className="Work__container__projects__container__icon" href={current.url}><LiveIcon /></a> */}
                                </div>
                            </>
                        }
                    </div>
                    <div className="Work__container__slider">
                        {!resize &&
                            projectList.projects.map((item) => (
                                <span
                                    className="Work__container__slider__circle"
                                    onClick={(e) => handleSetClick(e)}
                                    data-quote={item.id - 1}
                                    key={item.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;