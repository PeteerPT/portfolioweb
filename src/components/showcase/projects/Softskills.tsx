import React from 'react';

export interface ArmyProjectsProps {}

const styles: { [key: string]: React.CSSProperties } = {
    sitePageContent: {
        maxWidth: 800,
        margin: '0 auto',
        padding: '40px 10px',
        fontFamily: 'MillenniumBold, Arial, sans-serif',
        color: '#222',
        textAlign: 'center',
    },
    mainTitle: {
        fontSize: 44,
        fontWeight: 800,
        marginBottom: 6,
        fontFamily: 'gastromond, sans-serif',
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 500,
        marginBottom: 28,
        fontFamily: 'MillenniumBold, Times New Roman, Times, serif',
    },
    textBlock: {
        margin: '38px 0 38px 0',
        padding: '0 8px',
        textAlign: 'left',
        lineHeight: 1.7,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 700,
        margin: '36px 0 18px 0',
        letterSpacing: 0.5,
        textAlign: 'center',
        fontFamily: 'MillenniumBold, Arial, sans-serif',
    },
    list: {
        margin: '20px auto 24px auto',
        paddingLeft: 22,
        maxWidth: 700,
        textAlign: 'left',
        fontFamily: 'MillenniumBold, Arial, sans-serif',
    },
    listItem: {
        marginBottom: 10,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
    },
    captionedImage: {
        margin: '22px 0 15px 0',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
    },
    imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 24,
        width: '100%',
        margin: '0 auto 10px auto',
    },
    imageDescription: {
        padding: '20px 14px',
        backgroundColor: '#fff',
        borderRadius: 8,
        border: '1px solid #222',
        minHeight: 120,
        textAlign: 'center' as const,
        fontSize: 15,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center', // Mudou para center
        alignItems: 'center', // Adicionado para centralizar horizontalmente
        lineHeight: 1.4,
    },
    imageDescriptionTitle: {
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 10,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
        textAlign: 'center' as const,
    },
    imageDescriptionText: {
        fontSize: 14,
        lineHeight: 1.3,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
        textAlign: 'center' as const,
    },
    caption: {
        width: '100%',
        fontStyle: 'italic',
        marginTop: 8,
        fontSize: 14,
        color: '#333',
        textAlign: 'center' as const,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
    },
    challengesTitle: {
        fontSize: 18,
        fontWeight: 700,
        margin: '30px 0 10px 0',
        textAlign: 'center' as const,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
    },
    skillsTitle: {
        fontSize: 18,
        fontWeight: 700,
        margin: '28px 0 14px 0',
        textAlign: 'center' as const,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        margin: '0 auto 16px auto',
        width: '100%',
    },
    skillsGridBottom: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        margin: '0 auto 16px auto',
        width: '100%',
    },
    skillCard: {
        padding: '20px 16px',
        backgroundColor: '#fff',
        borderRadius: 8,
        border: '1px solid #222',
        minHeight: 100,
        textAlign: 'center' as const,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
        color: '#222',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center', // MUDOU DE 'space-between' PARA 'center'
        alignItems: 'center', // Adicionado para centralizar horizontalmente
        lineHeight: 1.4,
    },
    skillCardTitle: {
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 10,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
        color: '#222',
        textAlign: 'center' as const,
    },
    skillCardText: {
        fontSize: 14,
        lineHeight: 1.3,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
        color: '#222',
        textAlign: 'center' as const,
    },
    // Transformando o quote em parágrafo normal
    normalParagraph: {
        margin: '38px 0 38px 0',
        padding: '0 8px',
        textAlign: 'left',
        lineHeight: 1.7,
        fontFamily: 'MillenniumBold, Arial, sans-serif',
        fontSize: 15,
        color: '#222',
    },
};

const ArmyProjects: React.FC<ArmyProjectsProps> = () => {
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
                <h1 style={styles.mainTitle}>Army Experience & Soft Skills</h1>
                <h3 style={styles.subTitle}>Organization, Problem Solving & Growth</h3>

                {/* Management and Organization System */}
                <div className="text-block" style={styles.textBlock}>
                    <p>
                        During my time in the Brazilian Army, I was assigned to command the Supply and Transportation Section of the Support Platoon (PEL AP). This role required not only technical competence, but also <strong>exceptional organizational skills, quick adaptation, and strong leadership</strong>.
                    </p>

                    <h2 style={styles.sectionTitle}>Management and Organization System - PEL AP</h2>

                    <div className="captioned-image" style={styles.captionedImage}>
                        <div style={styles.imageGrid}>
                            <div style={styles.imageDescription}>
                                <div style={styles.imageDescriptionTitle}>📋 Visual Control System</div>
                                <div style={styles.imageDescriptionText}>Development of a custom 2D map with precise location of all materials</div>
                            </div>
                            <div style={styles.imageDescription}>
                                <div style={styles.imageDescriptionTitle}>📊 Complete Database</div>
                                <div style={styles.imageDescriptionText}>Detailed Excel spreadsheet with full inventory, quantities, and locations</div>
                            </div>
                            <div style={styles.imageDescription}>
                                <div style={styles.imageDescriptionTitle}>🗂️ Physical Organization</div>
                                <div style={styles.imageDescriptionText}>Categorized shelving system (A1, A2, A3... up to H) for optimized access</div>
                            </div>
                        </div>
                        <p style={styles.caption}>
                            <b>Figure 1:</b> Integrated material management system implemented at PEL AP, demonstrating a multiplatform organization methodology.
                        </p>
                    </div>

                    <h3 style={styles.challengesTitle}>🎯 Challenges and Achievements:</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <strong>Quick Adaptation:</strong> I took over an area outside my specialty and mastered the system in record time.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Backlog Resolution:</strong> Eliminated all accumulated delays in maintenance requests and materials management.
                        </li>
                        <li style={styles.listItem}>
                            <strong>System Implementation:</strong> Created my own organizational methodology integrating visual design, digital control, and physical organization.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Knowledge Transfer:</strong> Structured the entire system to facilitate the transition to the next person in charge.
                        </li>
                        <li style={styles.listItem}>
                            <strong>Effective Leadership:</strong> Led a multidisciplinary team while maintaining high standards of efficiency and organization.
                        </li>
                    </ul>

                    <h3 style={styles.skillsTitle}>💡 Skills Developed:</h3>
                    {/* 2 em cima */}
                    <div style={styles.skillsGrid}>
                        <div style={styles.skillCard}>
                            <div style={styles.skillCardTitle}>🎨 Design & Visual Organization</div>
                            <div style={styles.skillCardText}>Creation of maps and visual systems for process optimization</div>
                        </div>
                        <div style={styles.skillCard}>
                            <div style={styles.skillCardTitle}>📈 Data Management</div>
                            <div style={styles.skillCardText}>Full inventory control with advanced spreadsheets</div>
                        </div>
                    </div>
                    {/* 2 embaixo */}
                    <div style={styles.skillsGridBottom}>
                        <div style={styles.skillCard}>
                            <div style={styles.skillCardTitle}>⚡ Problem Solving</div>
                            <div style={styles.skillCardText}>Ability to identify bottlenecks and implement effective solutions</div>
                        </div>
                        <div style={styles.skillCard}>
                            <div style={styles.skillCardTitle}>👥 Technical Leadership</div>
                            <div style={styles.skillCardText}>Team leadership in a high-responsibility environment</div>
                        </div>
                    </div>
                    
                    {/* Transformei em parágrafo normal */}
                    <p style={styles.normalParagraph}>
                        This experience demonstrates my unique ability to combine <strong>systematic thinking, attention to detail, and effective leadership</strong>. You can count on me not only to deliver quality code, but also to organize processes, optimize workflows, and contribute significantly to organizational efficiency.
                    </p>
                </div>

                {/* Process Digitalization Project */}
                <div className="text-block" style={styles.textBlock}>
                    <h2 style={styles.sectionTitle}>Process Digitalization Project</h2>
                    <p>
                        In 2022, I participated in an initiative to digitize and automate internal material and document control. Before this, the entire process was manual, using paper and physical spreadsheets.
                    </p>
                    <p>
                        I developed a simple system that allowed real-time registration of entries, exits, and inventory. The impact was immediate: error reduction, greater transparency, and easier audits.
                    </p>
                </div>

                {/* Team Training & Standardization */}
                <div className="text-block" style={styles.textBlock}>
                    <h2 style={styles.sectionTitle}>Team Training & Standardization</h2>
                    <p>
                        One of the biggest challenges was high team turnover. To address this, I created manuals and provided hands-on training, ensuring everyone had access to the same operational standards.
                    </p>
                </div>

                {/* Logistics Problem Solving */}
                <div className="text-block" style={styles.textBlock}>
                    <h2 style={styles.sectionTitle}>Logistics Problem Solving</h2>
                    <p>
                        I was responsible for reorganizing the warehouse, creating a new layout to facilitate access to the most used materials. I also implemented an automatic restocking alert system, reducing shortages and waste.
                    </p>
                </div>

                {/* Additional Projects */}
                <div className="text-block" style={styles.textBlock}>
                    <h2 style={styles.sectionTitle}>Additional Projects</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>Monthly report automation using scripts</li>
                        <li style={styles.listItem}>Creation of digital forms to streamline requests</li>
                        <li style={styles.listItem}>Support for events and special operations, working in administrative and logistics roles</li>
                    </ul>
                </div>

                {/* Continuous Growth */}
                <div className="text-block" style={styles.textBlock}>
                    <h2 style={styles.sectionTitle}>Continuous Growth</h2>
                    <p>
                        These projects represent my ongoing learning journey. Each one demonstrates not only technical competence, but also <strong>discipline, organization, and the ability to deliver consistent results</strong> characteristics I carry from my military experience and apply daily in every challenge.
                    </p>
                    <p>
                        My goal is to keep growing, always maintaining the same level of organizational excellence and attention to detail I demonstrated both in managing complex systems and in my academic and professional projects.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ArmyProjects;