import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const message = "2023 Del-Add Pets. All rights reserved.";

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="social-media-links">
                    <a href="https://facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
                <p>{message}</p>
            </div>
        </footer>
    );
}

export default Footer;
