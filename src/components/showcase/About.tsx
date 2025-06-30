import React from 'react';
import me from '../../assets/pictures/workingAtComputer.png';
import meNow from '../../assets/pictures/currentme.jpg';
import ResumeDownload from './ResumeDownload';
import { Page } from '../applications/ShowcaseExplorer';

export interface AboutProps {
  goTo: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ goTo }) => {
    return (
        <>
            {/* CSS para scrollbar invisível */}
            <style>
                {`
                .site-page-content {
                    scrollbar-width: thin;
                    scrollbar-color: transparent transparent;
                }
                .site-page-content::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                    opacity: 0;
                }
                .site-page-content::-webkit-scrollbar-track {
                    background: transparent;
                    opacity: 0;
                }
                .site-page-content::-webkit-scrollbar-thumb {
                    background: transparent;
                    opacity: 0;
                }
                .site-page-content::-webkit-scrollbar-thumb:hover {
                    background: transparent;
                    opacity: 0;
                }
                `}
            </style>

            <div className="site-page-content" style={styles.sitePageContent}>
                <h1 style={{ marginLeft: -16 }}>Welcome</h1>
                <h3>I'm Pedro Oliveira</h3>
                <br />
                <div className="text-block">
                    <p>
                        I'm a Full Stack Developer with a deep enthusiasm for technology and problem-solving. 
                        Until March 2025, I served as 2nd Commander of PELAP in the Portuguese Army. During this time, 
                        I faced diverse operational and logistical challenges that sparked my interest in software development 
                        and digital systems a turning point that led me to pursue formal training in programming and web development.
                    </p>
                    <br />
                    <p>
                        Thank you for stopping by my portfolio. I hope you enjoy exploring it as much as I enjoyed creating it. 
                        If you have any questions or want to connect, feel free to use{' '}
                        <button 
                            style={styles.inlineLink} 
                            onClick={() => goTo('contact')}
                        >
                            this form
                        </button>{' '}
                        or reach out via email at{' '}
                        <a href="mailto:pedro10pedrolck@gmail.com">
                            pedro10pedrolck@gmail.com
                        </a>.
                    </p>
                </div>

                <ResumeDownload />

                <div className="text-block">
                    <h3>About Me</h3>
                    <br />
                    <p>
                        I've always been curious about how things work especially when it comes to technology and systems. 
                        That curiosity, combined with the leadership experience I gained in the military, guided me toward a new path in software development. 
                        I'm currently pursuing a degree in Systems Analysis and Development at Universidade Nove de Julho (UNINOVE), 
                        laying a strong foundation in modern development methodologies.
                    </p>
                    <br />
                    <div className="captioned-image">
                        <img src={me} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 1:</b> Me working on development projects :)
                            </sub>
                        </p>
                    </div>
                    <p>
                        My journey into tech was shaped by hands-on experience managing internal systems 
                        and contributing to organizational precision during my time in the military. 
                        Those responsibilities sparked a lasting interest in software engineering 
                        motivating me to explore programming languages, clean code practices, and project development.
                    </p>
                    <br />
                    <p>
                        I've completed certifications in Reactive Web Development with OutSystems, Java, JavaScript, Git, GitHub, and web development with HTML and CSS. 
                        With each new project, I refine both my coding skills and my ability to structure scalable and maintainable applications. 
                        Visit my{' '}
                        <button 
                            style={styles.inlineLink} 
                            onClick={() => goTo('projects/software')}
                        >
                            Software Projects
                        </button>{' '}
                        page to see what I've been working on.
                    </p>
                    <br />
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <div
                            style={{
                                flex: 1,
                                textAlign: 'justify',
                                alignSelf: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <h3>My Skills & Expertise</h3>
                            <br />
                            <p>
                                I specialize in JavaScript, Java, SQL, and CSS, with practical experience using frameworks like React. 
                                I follow a responsive, mobile-first approach and regularly work with tools such as VS Code, GitHub, Git, IntelliJ, and OutSystems.
                            </p>
                            <br />
                            <p>
                                My time in the military taught me essential leadership skills including team management, clear communication, 
                                and project coordination which now complement my technical abilities in software development. 
                                I strive to write clean, well-structured code that's built for performance and long-term maintenance.
                            </p>
                        </div>
                        <div style={styles.verticalImage}>
                            <img src={meNow} style={styles.image} alt="" />
                            <p>
                                <sub>
                                    <b>Figure 2:</b> Pedro Oliveira and his wife Leticia Oliveira
                                </sub>
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <p>
                        I'm multilingual, being a native Portuguese speaker with advanced English (C1), intermediate Spanish (B2), 
                        and basic French (A1). This linguistic versatility helps me work effectively in international development environments 
                        and collaborate with diverse teams.
                    </p>
                    <br />
                    <p>
                        Thanks for reading about me! I hope you enjoy exploring the rest of my portfolio website and everything it has to offer. 
                        You can find me on{' '}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/PeteerPT"
                        >
                            GitHub @PeteerPT
                        </a>{' '}
                        and{' '}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="http://www.linkedin.com/in/pedro-oliveira-666a40356"
                        >
                            LinkedIn
                        </a>.
                    </p>
                    <br />
                    <p>
                        If you have any questions or comments I would love to hear them. 
                        You can reach me through the{' '}
                        <button 
                            style={styles.inlineLink} 
                            onClick={() => goTo('contact')}
                        >
                            contact page
                        </button>{' '}
                        or shoot me an email at{' '}
                        <a href="mailto:pedro10pedrolck@gmail.com">
                            pedro10pedrolck@gmail.com
                        </a>.
                    </p>
                </div>
            </div>
        </>
    );
};

const styles: StyleSheetCSS = {
    sitePageContent: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '40px 20px',
    },
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
    inlineLink: {
        background: 'none',
        border: 'none',
        color: '#0066cc',
        textDecoration: 'underline',
        cursor: 'pointer',
        padding: 0,
        font: 'inherit',
        display: 'inline',
    },
};

export default About;