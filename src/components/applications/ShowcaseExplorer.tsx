import React, { useState } from 'react';
import Window from '../os/Window';
import Home from '../showcase/Home';
import About from '../showcase/About';
import Experience from '../showcase/Experience';
import Projects from '../showcase/Projects';
import Contact from '../showcase/Contact';
import SoftwareProjects from '../showcase/projects/Software';
import SoftskillsProjects from '../showcase/projects/Softskills';
import StoresProjects from '../showcase/projects/Stores';
import VerticalNavbar from '../showcase/VerticalNavbar';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export type Page =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "contact"
  | "projects/software"
  | "projects/softskills"
  | "projects/stores";

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
  const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });
  const [page, setPage] = useState<Page>("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home goTo={setPage} />;
      case "about":
        return <About goTo={setPage} />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects goTo={setPage} />;
      case "contact":
        return <Contact />;
      case "projects/software":
        return <SoftwareProjects />;
      case "projects/softskills":
        return <SoftskillsProjects />;
      case "projects/stores":
        return <StoresProjects />;
      default:
        return <Home goTo={setPage} />;
    }
  };

  const isHomePage = page === "home";

  return (
    <Window
      top={24}
      left={56}
      width={initWidth}
      height={initHeight}
      windowTitle="Pedro Oliveira - Portfolio 2025"
      windowBarIcon="windowExplorerIcon"
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
      bottomLeftText={"© Copyright 2025 Pedro Oliveira"}
    >
      {isHomePage ? (
        <div style={styles.homeLayout}>
          {renderPage()}
        </div>
      ) : (
        <div style={styles.sitePage}>
          <div style={styles.navbar}>
            <VerticalNavbar page={page} goTo={setPage} />
          </div>
          <div style={styles.sitePageContent}>
            {renderPage()}
          </div>
        </div>
      )}
    </Window>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  homeLayout: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
  },
  sitePage: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    minHeight: 0,
    minWidth: 0,
  },
  navbar: {
    width: 220,
    minWidth: 220,
    background: '#eaeaea',
    borderRight: '2px solid #888',
    height: '100%',
    position: 'relative',
    zIndex: 2,
    boxSizing: 'border-box',
  },
  sitePageContent: {
    flex: 1,
    overflow: 'auto',
    height: '100%',
    background: '#fff',
    padding: '32px 48px',
    boxSizing: 'border-box',
    minWidth: 0,
    minHeight: 0,
  },
};

export default ShowcaseExplorer;