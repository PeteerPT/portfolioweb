import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
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
                <ResumeDownload />

                <div style={styles.headerContainer}>
                    <div style={styles.header}>
                        <div style={styles.headerRow}>
                            <h1>Portuguese Army – Land Forces</h1>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.exercito.pt/"
                            >
                                <h4>www.exercito.pt</h4>
                            </a>
                        </div>
                        <div style={styles.headerRow}>
                            <h3>2nd Commander of PELAP / Logistics & Supplies Lead</h3>
                            <b>
                                <p>July 2020 to March 2025</p>
                            </b>
                        </div>
                    </div>
                </div>

                <div className="text-block" style={styles.textBlock}>
                    <p>
                        During my time in the Portuguese Army, I was entrusted with highly strategic roles that required organization, precision, and initiative. 
                        One of the most impactful projects I led was the full documentation and mapping of all materials within the Support Platoon (PEL Ap).
                    </p>
                    <br />
                    <ul>
                        <li>
                            <p>
                                Designed a complete 2D digital map using architectural planning tools, detailing the exact placement of equipment and storage units (from A1 to H3), both virtually and physically.
                            </p>
                        </li>
                        <li>
                            <p>
                                Created a photographic inventory and integrated it with a comprehensive Excel spreadsheet, listing item types, quantities, and exact shelf locations, allowing full traceability of material.
                            </p>
                        </li>
                        <li>
                            <p>
                                Structured and reorganized the physical layout to match the digital model, promoting easy handover and fast orientation for future team members.
                            </p>
                        </li>
                        <li>
                            <p>
                                This initiative significantly increased operational efficiency and set a standard of organization within the platoon, which continued to benefit the team even after my departure.
                            </p>
                        </li>
                    </ul>
                    <br />
                    <p>
                        In another critical moment, I was designated as Commander of the Replenishment and Transportation Section, a role outside my usual field of expertise. 
                        The unit was facing significant logistical backlogs and required a reliable leader to take control.
                    </p>
                    <br />
                    <ul>
                        <li>
                            <p>
                                Rapidly familiarized myself with technical procedures and material flow, enabling me to resolve all pending supply and maintenance requests within a short period.
                            </p>
                        </li>
                        <li>
                            <p>
                                Reorganized the entire structure and material control system, simplifying future operations for those who would succeed me.
                            </p>
                        </li>
                        <li>
                            <p>
                                Demonstrated adaptability, analytical thinking, and accountability in a high-pressure environment, delivering measurable improvements in both process and communication.
                            </p>
                        </li>
                    </ul>
                    <br />
                    <p>
                        These experiences reflect not only my technical aptitude but also my strong soft skills such as leadership, autonomy, organization, and problem-solving, which I now bring to the private sector.
                    </p>
                    <br />
                    <div style={styles.skillsHighlight}>
                        <p><strong>Key Skills Developed:</strong> Strategic Planning • Crisis Management • Team Leadership • Process Optimization • Digital Documentation • Inventory Control</p>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles: StyleSheetCSS = {
    sitePageContent: {
        maxWidth: 1000,
        margin: '0 auto',
        padding: '40px 20px',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    textBlock: {
        marginTop: 16,
    },
    skillsHighlight: {
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px',
        borderLeft: '4px solid #007bff',
        marginTop: '8px',
    },
};

export default Experience;