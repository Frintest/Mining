import React, { Component } from 'react';

import './block-color-item.scss';


class BlockColorItem extends Component {
	state = {
		borderColor: 'transparent',
		value: '#007bff'
	};

	activeItem = (e, color) => {
		this.setState(() => {
			return {
				borderColor: color,
				value: e.target.value
			}
		})
	};

	render() {
		const { colorItem } = this.props;
		const { borderColor, value } = this.state;

		const borderColorEnd = colorItem;

		console.log(value, ' ',);

		return (
			<input
				type="radio"
				name="color"
				value={colorItem}
				className="block-color__item block-color__btn"
				style={{background: colorItem, borderColor: borderColor}}
				onChange={e => this.activeItem(e, borderColorEnd)}
				defaultChecked={value === colorItem}
			/>
		);
	}
}

export default BlockColorItem;