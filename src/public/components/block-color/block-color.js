import React, { Component } from 'react';

import BlockColorItem from '../block-color-item/block-color-item';

import './block-color.scss';


const dbColor =  ['#007bff', '#28a745', '#dc3545', '#17a2b8', '#ffc107'];

const colors = dbColor.map(color => (
	<BlockColorItem colorItem={color} key={color.toString()} />
));


class BlockColor extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form className="block-color">{colors}</form>
		);
	}
}

export default BlockColor;