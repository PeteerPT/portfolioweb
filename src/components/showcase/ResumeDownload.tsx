import React, { useState } from 'react';
import printer from '../../assets/resume/printer.gif';
import ResumePT from '../../assets/resume/CV - PT.pdf';
import ResumeEN from '../../assets/resume/CV - EN.pdf';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'PT'>('EN');

    const getCurrentResume = () => {
        return selectedLanguage === 'PT' ? ResumePT : ResumeEN;
    };

    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{altText ? altText : 'Looking for my resume?'}</h3>
                
                {/* Language Selection */}
                <div style={styles.languageSelector}>
                    <span style={styles.languageLabel}>Language: </span>
                    <button
                        style={{
                            ...styles.languageButton,
                            ...(selectedLanguage === 'EN' ? styles.activeLanguage : {})
                        }}
                        onClick={() => setSelectedLanguage('EN')}
                    >
                        EN
                    </button>
                    <span style={styles.separator}> | </span>
                    <button
                        style={{
                            ...styles.languageButton,
                            ...(selectedLanguage === 'PT' ? styles.activeLanguage : {})
                        }}
                        onClick={() => setSelectedLanguage('PT')}
                    >
                        PT
                    </button>
                </div>

                {/* Download Link */}
                <a rel="noreferrer" target="_blank" href={getCurrentResume()}>
                    <p style={styles.downloadText}>
                        Click here to download it! ({selectedLanguage})
                    </p>
                </a>

                {/* Quick Links */}
                <div style={styles.quickLinks}>
                    <span style={styles.quickLinksText}>Quick links: </span>
                    <a rel="noreferrer" target="_blank" href={ResumeEN} style={styles.quickLink}>
                        English
                    </a>
                    <span> • </span>
                    <a rel="noreferrer" target="_blank" href={ResumePT} style={styles.quickLink}>
                        Português
                    </a>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
        display: 'flex',
    },
    resumeContainerText: {
        flexDirection: 'column',
        flex: 1,
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 24,
    },
    languageSelector: {
        margin: '8px 0',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
    },
    languageLabel: {
        fontWeight: 'bold',
        color: '#333',
    },
    languageButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        padding: '2px 4px',
        color: '#666',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
    },
    activeLanguage: {
        color: '#0066cc',
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
    separator: {
        color: '#999',
        fontSize: '14px',
    },
    downloadText: {
        margin: '8px 0',
        color: '#0066cc',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
    quickLinks: {
        fontSize: '12px',
        color: '#666',
        marginTop: '4px',
        display: 'flex',
        alignItems: 'center',
    },
    quickLinksText: {
        fontStyle: 'italic',
    },
    quickLink: {
        color: '#0066cc',
        textDecoration: 'underline',
        fontSize: '12px',
    },
};

export default ResumeDownload;