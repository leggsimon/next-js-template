import React from 'react';
import Head from '../components/Head/Head';
import Nav from '../components/Nav/Nav';
import CardLink from '../components/CardLink/CardLink';

import '../styles/index.css';

const Home = () => (
	<div>
		<Head title="Home" />
		<Nav />

		<div className="hero">
			<h1 className="title">Welcome to Next!</h1>
			<p className="description">
				To get started, edit <code>pages/index.js</code> and save to reload.
			</p>

			<div className="row">
				<CardLink href="https://github.com/zeit/next.js#getting-started">
					<h3>Getting Started &rarr;</h3>
					<p>Learn more about Next on Github and in their examples</p>
				</CardLink>
				<CardLink href="https://open.segment.com/create-next-app">
					<h3>Examples &rarr;</h3>
					<p>
						Find other example boilerplates on the <code>create-next-app</code> site
					</p>
				</CardLink>
				<CardLink href="https://github.com/segmentio/create-next-app">
					<h3>Create Next App &rarr;</h3>
					<p>Was this tool helpful? Let us know how we can improve it</p>
				</CardLink>
			</div>
		</div>
	</div>
);

export default Home;
