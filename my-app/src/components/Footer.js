import React from "react";

function Footer() {
    return (
        <footer className="social-container">
                <div>
                    <a href="https://twitter.com/mykowave">
                        <img className="twitter" src="../../assets/cdnlogo.com_twitter-icon.svg" alt="twitter" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/michaeljsu/" target="_blank" rel="noreferrer">
                        <img className="linkedin" src="../../assets/linkedin.png" alt="linkedin" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/MyCodeSu" target="_blank" rel="noreferrer">
                        <img className="github" src="../../assets/GitHub-light.png" alt="Github" />
                    </a>
                </div>
        </footer>

    );
}

export default Footer;