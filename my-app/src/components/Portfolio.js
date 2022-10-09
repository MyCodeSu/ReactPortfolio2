import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Run Buddy',
			description:
				'This is a fully front end and static web-site used to practice HTML and CSS only.',
			image: 'runbuddy.png',
			technologies: [
				'HTML/CSS'
			],
			github: 'https://github.com/MyCodeSu/run-buddy',
			deployed: '-',
		},
		{
			name: 'Charge It Up',
			description:
				'Find charging stations for your electric car so you never run out of power.',
			image: 'chargeitup.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Tailwind CSS'
			],
			github: 'https://github.com/MyCodeSu/ev-mapper',
			deployed: 'https://tarequem.github.io/ev-mapper/',
		},
		{
			name: 'Gift You Up',
			description:
				'Gift exchange and wishlists turned digital for all your organization needs.',
			image: 'Giftyouup.gif',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/MyCodeSu/Gift_You_Up',
			deployed: 'https://secret-anchorage-62343.herokuapp.com/',
		},
		{
			name: 'Employee Tracker',
			description:
				'Track your employees and crucial employment information by Department, Manager, Job Title, etc.',
			image: 'EmployeeTracker.png',
			technologies: [
				'JavaScript',
				'Node.js',
				'Express',
				'mySQL'
			],
			github: 'https://github.com/MyCodeSu/Employee-Tracker',
			deployed: '-',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'WeatherDashboard.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/MyCodeSu/Weather-Dashboard',
			deployed: 'https://mycodesu.github.io/Weather-Dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/MyCodeSu/passwordGenerator',
			deployed: 'https://mycodesu.github.io/passwordGenerator/',
		},
		{
			name: 'Code Quiz',
			description:
				'Feeling confident with your JS? Take a quiz!',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/MyCodeSu/Code-Quiz',
			deployed: 'https://mycodesu.github.io/Code-Quiz/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;