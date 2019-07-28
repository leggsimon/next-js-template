import React from 'react';
import Link from 'next/link';
import './CardLink.css';

const CardLink = props => (
	<Link href={props.href}>
		<a className="card">{props.children}</a>
	</Link>
);
export default CardLink;
