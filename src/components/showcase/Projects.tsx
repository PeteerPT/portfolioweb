import React, { useState } from 'react';
import { Page } from '../applications/ShowcaseExplorer';
import software from '../../assets/pictures/projects/software.gif';
import stores from '../../assets/pictures/projects/stores.ico';
import softskills from '../../assets/pictures/projects/softskills.ico';

export interface ProjectsProps {
    goTo: (page: Page) => void;
}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: Page;
    iconStyle: React.CSSProperties;
    onClick: (page: Page) => void;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
    onClick,
}) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = () => {
        onClick(route);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={{
                ...styles.projectLink,
                ...(isHovering ? styles.projectLinkHover : {})
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                <img
                    src={icon}
                    style={Object.assign(
                        {},
                        styles.projectLinkImage,
                        iconStyle
                    )}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}>
                <span style={styles.arrow}>→</span>
            </div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = ({ goTo }) => {
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
                <h1>Projects</h1>
                <h3>& Hobbies</h3>
                <br />
                <p>
                    Click on one of the areas below to check out some of my favorite
                    projects I've done in that field. I spent a lot of time to
                    include a lot of visuals and interactive media to showcase each
                    project. Enjoy!
                </p>
                <br />
                <div style={styles.projectLinksContainer}>
                    <ProjectBox
                        icon={software}
                        iconStyle={styles.softwareIcon}
                        title="Software"
                        subtitle="PROJECTS"
                        route="projects/software"
                        onClick={goTo}
                    />
                    <ProjectBox
                        icon={softskills}
                        iconStyle={styles.softskillsIcon}
                        title="Softskills"
                        subtitle="VENTURES"
                        route="projects/softskills"
                        onClick={goTo}
                    />
                    <ProjectBox
                        icon={stores}
                        iconStyle={styles.storesIcon}
                        title="Stores"
                        subtitle="SHOWCASE"
                        route="projects/stores"
                        onClick={goTo}
                    />
                </div>
            </div>
        </>
    );
};

const styles: StyleSheetCSS = {
    sitePageContent: {
        maxWidth: 800,
        margin: '0 auto',
        padding: '40px 10px',
        textAlign: 'left',
    },
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.2s ease',
        padding: '16px',
        borderRadius: '8px',
        border: '2px solid transparent',
    },
    projectLinkHover: {
        backgroundColor: '#f5f5f5',
        borderColor: '#ddd',
        transform: 'translateY(-2px)',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        marginRight: 38,
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
        display: 'flex',
    },
    projectLinkRight: {
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    arrow: {
        fontSize: 24,
        color: '#666',
        transition: 'transform 0.2s ease',
    },
    softwareIcon: {
        width: 56,
        height: 56,
    },
    softskillsIcon: {
        width: 48,
        height: 48,
    },
    storesIcon: {
        width: 42,
        height: 42,
    },
};

export default Projects;