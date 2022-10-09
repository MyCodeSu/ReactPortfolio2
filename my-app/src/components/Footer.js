import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://https://github.com/MyCodeSu"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("..//assets/logos/GitHub-light.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/michaeljsu/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/logos/linkedin.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/mykowave"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/logos/Twitter.png")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;