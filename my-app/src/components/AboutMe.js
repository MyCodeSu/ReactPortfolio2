import React from "react";

function AboutMe() {
    return (
        <section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../assets/Headshot.jpeg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
                Hello, my name is Michael Su. I am a full stack developer with a passion for changing the world!
				</p>
			</div>
		</section>
    );
}

export default AboutMe;