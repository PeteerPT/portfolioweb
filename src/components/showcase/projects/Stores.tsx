import React from 'react';
import MultiPet1 from '../../../assets/pictures/projects/Stores/MultiPet 1.png';
import MultiPetGif1 from '../../../assets/pictures/projects/Stores/MultiPetGif 1.gif';
import MultiPetGif2 from '../../../assets/pictures/projects/Stores/MultiPetGif 2.gif';
import MultiPetGif3 from '../../../assets/pictures/projects/Stores/MultiPetGif 3.gif';
import MultiPet2 from '../../../assets/pictures/projects/Stores/MultiPet 2.png';
import MultiPet3 from '../../../assets/pictures/projects/Stores/MultiPet 3.png';
import MultiPet4 from '../../../assets/pictures/projects/Stores/MultiPet 4.png';
import MultiPet5 from '../../../assets/pictures/projects/Stores/MultiPet 5.png';

export interface StoreProjectsProps {}

const mediaStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 720,
    borderRadius: 10,
    margin: "2rem auto 0 auto",
    display: "block",
    boxShadow: "0 2px 14px #0002",
};

const captionStyle: React.CSSProperties = {
    fontSize: 16,
    margin: "12px 0 0 0",
    textAlign: "center",
    color: "#444",
    fontFamily: 'Millennium, Times New Roman, Times, serif',
    letterSpacing: "0.03em"
};

const StoreProjects: React.FC<StoreProjectsProps> = (props) => {
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

            <div
                className="site-page-content"
                style={{
                    maxWidth: 1300,
                    margin: "0 auto",
                    padding: "36px 24px 48px 24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontFamily: 'Millennium, Times New Roman, Times, serif',
                    letterSpacing: "0.03em",
                    fontSize: 16,
                    background: "none"
                }}
            >
                <h1 style={{
                    marginTop: 0,
                    marginBottom: 10,
                    fontSize: 38,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    fontFamily: 'gastromond, sans-serif',
                    textAlign: "center"
                }}>
                    STORES & E-COMMERCE PROJECTS
                </h1>
                <h3 style={{
                    marginTop: 0,
                    marginBottom: 30,
                    fontWeight: 400,
                    fontFamily: 'MillenniumBold, Times New Roman, Times, serif',
                    textAlign: "center"
                }}>
                    BUILT WITH OUTSYSTEMS & SHOPIFY
                </h3>
                <div
                    className="text-block"
                    style={{
                        textAlign: "center",
                        maxWidth: 900,
                        marginBottom: 18,
                        fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace",
                    }}
                >
                    <p>
                        This section showcases my work developing custom e-commerce solutions for clients using <b>Outsystems</b> and <b>Shopify</b>. Below is a walkthrough of the MultiPet project—a pet shop website designed with dynamic visuals, responsive UI, and user engagement in mind.
                    </p>
                    <p>
                        The goal was to deliver a fast, visually appealing, and interactive store—with full management capabilities for the client. All animations, banners, and user flows were crafted to improve conversion and user experience.
                    </p>
                </div>

                {/* MultiPet landing page */}
                <img src={MultiPet1} alt="MultiPet Home" style={mediaStyle} />
                <div style={captionStyle}>
                    MultiPet landing page. Brand colors, friendly layout, and clear navigation welcome the user.
                </div>

                {/* Dynamic animated banner carousel */}
                <img src={MultiPetGif1} alt="MultiPet Carousel" style={mediaStyle} />
                <div style={captionStyle}>
                    Dynamic animated banner carousel with promotional content and interactive tips for customers. Built with smooth transitions, it reinforces the playful and modern identity of the brand.
                </div>

                {/* Store features and benefits */}
                <img src={MultiPetGif2} alt="Store Features" style={mediaStyle} />
                <div style={captionStyle}>
                    Highlights features and benefits of shopping at MultiPet. This section presents store advantages such as exclusive deals, fast delivery, loyalty offers, and other reasons customers love the store.
                </div>

                {/* Animated buttons with feedback */}
                <img src={MultiPetGif3} alt="Product Buttons Animation" style={mediaStyle} />
                <div style={captionStyle}>
                    Animated buttons for product categories and actions. When hovering or clicking, users experience lively visual feedback and are redirected to the relevant section (e.g., catalog, support, Instagram, Google Maps).
                </div>

                {/* Curiosities and coupons section */}
                <img src={MultiPet2} alt="Curiosities & Coupons" style={mediaStyle} />
                <div style={captionStyle}>
                    Curiosities and coupons section. Each article is clickable and takes the user directly to the related Instagram post, driving engagement and offering extra content.
                </div>

                {/* Footer */}
                <img src={MultiPet3} alt="Footer" style={mediaStyle} />
                <div style={captionStyle}>
                    Footer with business hours, location, all store policies, and quick navigation links. All critical information is organized and easy to find.
                </div>

                {/* Location section with map */}
                <img src={MultiPet4} alt="Store Location" style={mediaStyle} />
                <div style={captionStyle}>
                    Location section with interactive map (clickable, links to Google Maps), store photo, social media links, and business hours.
                </div>

                {/* Support/contact page */}
                <img src={MultiPet5} alt="Support Page" style={mediaStyle} />
                <div style={captionStyle}>
                    Support page where customers can send a message directly to the store's email. Simple and efficient contact form enhances customer support.
                </div>

                {/* Project explanation */}
                <div
                    className="text-block"
                    style={{
                        textAlign: "center",
                        maxWidth: 900,
                        marginTop: 38,
                        marginBottom: 0,
                        fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace"
                    }}
                >
                    <h2 style={{
                        marginBottom: 10,
                        marginTop: 18,
                        fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace",
                        fontSize: 26,
                        fontWeight: 600,
                        letterSpacing: "0.03em"
                    }}>
                        TECHNOLOGIES & APPROACH
                    </h2>
                    <ul style={{
                        margin: "0 auto 24px auto",
                        maxWidth: 600,
                        textAlign: "left",
                        fontSize: 15,
                        fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace"
                    }}>
                        <li>
                            <b>Outsystems:</b> Rapid low-code development, custom workflows for store management, integration with client systems.
                        </li>
                        <li>
                            <b>Shopify:</b> Theme customization, app configuration, optimization for performance and SEO.
                        </li>
                        <li>
                            <b>Responsive Design:</b> Seamless experience on desktop and mobile.
                        </li>
                        <li>
                            <b>WhatsApp Integration:</b> Direct support channel for customers, improving conversion and trust.
                        </li>
                        <li>
                            <b>Dynamic Visuals & Promotions:</b> Interactive carousels, animated banners, coupons, and action-driven calls to engage users.
                        </li>
                    </ul>
                    <h2 style={{
                        marginTop: 24,
                        marginBottom: 10,
                        fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace",
                        fontSize: 26,
                        fontWeight: 600,
                        letterSpacing: "0.03em"
                    }}>
                        RESULTS & TAKEAWAYS
                    </h2>
                    <ul style={{
                        margin: "0 auto 20px auto",
                        maxWidth: 600,
                        textAlign: "left",
                        fontSize: 15,
                        fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace"
                    }}>
                        <li>
                            <b>Increased conversion:</b> Design and promotional strategy resulted in higher sales and customer engagement.
                        </li>
                        <li>
                            <b>Easy management:</b> Admin tools for managing orders, promotions, and inventory simplified daily operations.
                        </li>
                        <li>
                            <b>Scalability:</b> The project is ready for future integrations and new features as required by the client.
                        </li>
                    </ul>
                    <p style={{
                        marginTop: 12,
                        fontFamily: 'Millennium, Times New Roman, Times, serif',
                    }}>
                        <b>Summary:</b> MultiPet is a solid example of how a modern e-commerce can combine technology, design, and a strong brand identity, providing value both to the business and the end customer.
                    </p>
                </div>
            </div>
        </>
    );
};

export default StoreProjects;