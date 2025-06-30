import React from 'react';
import { Page } from '../applications/ShowcaseExplorer';

export interface VerticalNavbarProps {
  page: Page;
  goTo: (page: Page) => void;
}

const VerticalNavbar: React.FC<VerticalNavbarProps> = ({ page, goTo }) => {
  const projectsExpanded = page.startsWith('projects');
  
  return (
    <div style={styles.navbar}>
      <div style={styles.header}>
        <h1 style={styles.headerText}>Pedro Oliveira</h1>
        <h1 style={styles.headerText}></h1>
        <h3 style={styles.headerShowcase}></h3>
      </div>
      <div style={styles.links}>
        <button 
          style={{
            ...styles.link,
            ...(page === 'home' ? styles.activeLink : {}),
          }}
          onClick={() => goTo('home')}
        >
          HOME
        </button>
        <button 
          style={{
            ...styles.link,
            ...(page === 'about' ? styles.activeLink : {}),
          }}
          onClick={() => goTo('about')}
        >
          ABOUT
        </button>
        <button 
          style={{
            ...styles.link,
            ...(page === 'experience' ? styles.activeLink : {}),
          }}
          onClick={() => goTo('experience')}
        >
          EXPERIENCE
        </button>
        <button
          style={{
            ...styles.link,
            ...(projectsExpanded ? styles.expandedLink : {}),
          }}
          onClick={() => goTo('projects')}
        >
          PROJECTS
        </button>
        {projectsExpanded && (
          <div style={styles.insetLinks}>
            <button 
              style={{
                ...styles.insetLink,
                ...(page === 'projects/software' ? styles.activeLink : {}),
              }}
              onClick={() => goTo('projects/software')}
            >
              SOFTWARE
            </button>
            <button 
              style={{
                ...styles.insetLink,
                ...(page === 'projects/softskills' ? styles.activeLink : {}),
              }}
              onClick={() => goTo('projects/softskills')}
            >
              SOFTSKILLS
            </button>
            <button 
              style={{
                ...styles.insetLink,
                ...(page === 'projects/stores' ? styles.activeLink : {}),
              }}
              onClick={() => goTo('projects/stores')}
            >
              STORES
            </button>
          </div>
        )}
        <button 
          style={{
            ...styles.link,
            ...(page === 'contact' ? styles.activeLink : {}),
          }}
          onClick={() => goTo('contact')}
        >
          CONTACT
        </button>
      </div>
      <div style={styles.spacer} />
      <div style={styles.forHireContainer} onMouseDown={() => goTo('contact')}>
        {/* <img src={forHire} style={styles.image} alt="" /> */}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    background: '#eaeaea',
    padding: '20px 16px',
    boxSizing: 'border-box',
    fontFamily: 'MillenniumBold, "Times New Roman", Times, serif',
    fontSize: 15,
    color: '#222',
  },
  header: {
    marginBottom: 30,
    textAlign: 'center',
  },
  headerText: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: '#222',
    fontFamily: 'MillenniumBold, "Times New Roman", Times, serif',
  },
  headerShowcase: {
    margin: 0,
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    fontFamily: 'MillenniumBold, "Times New Roman", Times, serif',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  link: {
    background: 'none',
    border: 'none',
    padding: '10px 16px',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: 15,
    fontWeight: 700,
    fontFamily: 'MillenniumBold, "Times New Roman", Times, serif',
    color: '#222',
    borderRadius: 2,
    transition: 'background-color 0.2s',
  },
  activeLink: {
    backgroundColor: '#c0c0c0',
  },
  expandedLink: {
    backgroundColor: '#c0c0c0',
  },
  insetLinks: {
    marginLeft: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  insetLink: {
    background: 'none',
    border: 'none',
    padding: '7px 16px',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 700,
    fontFamily: 'MillenniumBold, "Times New Roman", Times, serif',
    color: '#444',
    borderRadius: 2,
    transition: 'background-color 0.2s',
  },
  spacer: {
    flex: 1,
  },
  forHireContainer: {
    marginTop: 'auto',
    cursor: 'pointer',
  },
};

export default VerticalNavbar;