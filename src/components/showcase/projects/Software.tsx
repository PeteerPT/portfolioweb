import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
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
                <h1>Software</h1>
                <h3>Projects</h3>
                <br />
                <p>
                    Below are some of my favorite software projects that I developed 
                    during my learning journey at Alura and professional experiences. 
                    Each project represents a milestone in my growth as a front-end developer 
                    and demonstrates my technical and organizational evolution.
                </p>
                <br />
                <ResumeDownload />
                <br />
                
                {/* Main Project - AluraBooks */}
                <div className="text-block">
                    <h2>AluraBooks - Book E-commerce</h2>
                    <br />
                    <p>
                        AluraBooks is a technology book e-commerce project that I developed 
                        during the "HTML and CSS: responsiveness with mobile-first" course 
                        at Alura. This project was fundamental to solidify my knowledge 
                        in responsive design and mobile-first methodology, demonstrating my 
                        ability to create modern and functional interfaces.
                    </p>
                    <br />
                    <div className="captioned-image">
                        <img 
                            src="https://imgur.com/6GsjQvJ.png" 
                            alt="AluraBooks Screenshot"
                            style={styles.projectImage}
                        />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 1:</b> Main interface of AluraBooks, 
                                demonstrating responsive design and mobile-first layout.
                            </sub>
                        </p>
                    </div>
                    <p>
                        The project implements advanced concepts of responsiveness, using 
                        CSS Grid and Flexbox to create a layout that adapts perfectly 
                        to different screen sizes. Integration with SwiperJS adds 
                        modern interactivity, allowing smooth navigation between products.
                    </p>
                    <br />
                    <h3>Technologies Used:</h3>
                    <ul>
                        <li><strong>HTML5</strong> - Semantic structure</li>
                        <li><strong>CSS3</strong> - Responsive design and animations</li>
                        <li><strong>SwiperJS</strong> - Interactive carousel</li>
                        <li><strong>Mobile-first</strong> - Development methodology</li>
                    </ul>
                    <br />
                    <h3>Links:</h3>
                    <ul>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/PeteerPT/alura-books"
                            >
                                <p>
                                    <b>[GitHub]</b> - AluraBooks Repository
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Alura JavaScript Projects */}
                <div className="text-block">
                    <h2>Interactive JavaScript Projects</h2>
                    <br />
                    <p>
                        During my education at Alura, I developed a series of JavaScript projects 
                        that demonstrate my evolution in the language and ability 
                        to create interactive applications. These projects, although simple, 
                        represent solid fundamentals and attention to detail.
                    </p>
                    <br />
                    
                    <h3>🎯 Secret Number Game</h3>
                    <p>
                        Interactive game where the user must guess a number between 1 and 50. 
                        The project includes speech synthesis for accessibility, input validation 
                        and attempts system. Demonstrates knowledge in DOM manipulation, 
                        Web APIs and programming logic.
                    </p>
                    <br />

                    <h3>🎄 Secret Santa</h3>
                    <p>
                        Application for secret santa draw with data validation, 
                        duplicate prevention and shuffle algorithm. Showcases 
                        skills in arrays, string manipulation and intuitive user interface.
                    </p>
                    <br />

                    <h3>🎲 Number Picker</h3>
                    <p>
                        Tool to draw random numbers with customizable range. 
                        Implements unique number generation and clean, functional interface.
                    </p>
                    <br />

                    <h3>📅 Day of the Week Checker</h3>
                    <p>
                        Application that determines the day of the week for specific dates, 
                        demonstrating work with Date objects and data formatting.
                    </p>
                    <br />

                    <h3>🌟 Alura Plus Website</h3>
                    <p>
                        Complete landing page for Alura Plus with responsive design, 
                        demonstrating skills in layout, typography and content structuring.
                    </p>
                    <br />

                    <h3>Project Links:</h3>
                    <ul>
        <li>
            <a href="https://github.com/PeteerPT/Jogo-do-numero-secreto" target="_blank" rel="noreferrer">
                [GitHub] – Secret Number Game
            </a>
            {' / '}
            <a href="https://jogo-nu-lemon.vercel.app/" target="_blank" rel="noreferrer">
                [Vercel] – Deploy
            </a>
        </li>
        <li>
            <a href="https://github.com/PeteerPT/amigo-secreto" target="_blank" rel="noreferrer">
                [GitHub] – Secret Santa
            </a>
            {' / '}
            <a href="https://sorteador-numeros-six-tan.vercel.app/" target="_blank" rel="noreferrer">
                [Vercel] – Deploy
            </a>
        </li>
        <li>
            <a href="https://github.com/PeteerPT/sorteador-numeros" target="_blank" rel="noreferrer">
                [GitHub] – Number Picker
            </a>
            {' / '}
            <a href="https://sorteador-numeros-six-tan.vercel.app/" target="_blank" rel="noreferrer">
                [Vercel] – Deploy
            </a>
        </li>
        <li>
            <a href="https://github.com/PeteerPT/Dia-da-Semana" target="_blank" rel="noreferrer">
                [GitHub] – Day of the Week Checker
            </a>
            {' / '}
            <a href="https://dia-da-semana-seven.vercel.app/" target="_blank" rel="noreferrer">
                [Vercel] – Deploy
            </a>
        </li>
        <li>
            <a href="https://github.com/PeteerPT/site-alura" target="_blank" rel="noreferrer">
                [GitHub] – Alura Plus Website
            </a>
            {' / '}
            <a href="https://site-alura-pearl.vercel.app/" target="_blank" rel="noreferrer">
                [Vercel] – Deploy
            </a>
        </li>
    </ul>
            </div>

                
                <ResumeDownload />
            </div>
        </>
    );
};

const styles: StyleSheetCSS = {
    sitePageContent: {
        maxWidth: 800,
        margin: '0 auto',
        padding: '40px 10px',
        textAlign: 'center',
    },
    projectImage: {
        width: '100%',
        maxWidth: 800,
        borderRadius: 8,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    caption: {
        width: '80%',
        fontStyle: 'italic',
        marginTop: 12,
    },
    imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 20,
        marginBottom: 20,
    },
    imageDescription: {
        padding: 16,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        borderLeft: '4px solid #007bff',
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 16,
        marginBottom: 20,
    },
    skillCard: {
        padding: 16,
        backgroundColor: '#f1f8ff',
        borderRadius: 8,
        border: '1px solid #d1ecf1',
    },
};

export default SoftwareProjects;