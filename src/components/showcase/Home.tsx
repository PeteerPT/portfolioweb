import React from 'react';
import { Page } from '../applications/ShowcaseExplorer';

export interface HomeProps {
  goTo: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ goTo }) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Nome principal - cada linha separada para ficar empilhado */}
        <h1 style={styles.firstName}>Pedro</h1>
        <h1 style={styles.lastName}>Oliveira</h1>
        
        {/* Subtítulo */}
        <h2 style={styles.subtitle}>Full Stack Developer</h2>
        
        {/* Links de navegação - ABAIXO do nome, bem separados */}
        <div style={styles.navigation}>
          <button style={styles.navLink} onClick={() => goTo('about')}>
            ABOUT
          </button>
          <button style={styles.navLink} onClick={() => goTo('experience')}>
            EXPERIENCE
          </button>
          <button style={styles.navLink} onClick={() => goTo('projects')}>
            PROJECTS
          </button>
          <button style={styles.navLink} onClick={() => goTo('contact')}>
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
  },
  content: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column', // IMPORTANTE: força layout vertical
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstName: {
    fontSize: '84px',
    fontWeight: 'bold',
    margin: '0',
    color: '#333',
    fontFamily: 'Times, "Times New Roman", serif',
    letterSpacing: '-1px',
    lineHeight: '0.8', // Junta as linhas do nome
  },
  lastName: {
    fontSize: '84px',
    fontWeight: 'bold',
    margin: '0 0 30px 0', // Margem embaixo para separar do subtítulo
    color: '#333',
    fontFamily: 'Times, "Times New Roman", serif',
    letterSpacing: '-1px',
    lineHeight: '0.8',
  },
  subtitle: {
    fontSize: '20px',
    margin: '0 0 80px 0', // Margem grande para separar dos links
    color: '#666',
    fontWeight: 'normal',
    letterSpacing: '3px',
    fontFamily: 'Times, "Times New Roman", serif',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row', // Links em linha horizontal
    justifyContent: 'center',
    alignItems: 'center',
    gap: '60px',
    flexWrap: 'wrap',
    width: '100%',
  },
  navLink: {
    background: 'none',
    border: 'none',
    fontSize: '16px',
    color: '#8B7CF6',
    textDecoration: 'underline',
    cursor: 'pointer',
    padding: '8px 0',
    fontWeight: 'normal',
    letterSpacing: '1px',
    fontFamily: 'Times, "Times New Roman", serif',
    transition: 'color 0.2s ease',
  },
};

export default Home;