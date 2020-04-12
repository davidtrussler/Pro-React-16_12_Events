import React, {Component} from 'react'; 

export class ThemeButton extends Component {
	handleClick = (e) => {
		console.log(
			`ThemeButton: Type: ${e.type} ` +
			`Target: ${e.target.tagName} ` + 
			`CurrentTarget: ${e.currentTarget.tagName}`
		); 
		this.props.callback(this.props.theme); 
	}

	render() {
		return (
			<span 
				className="m-1"
				onClick={this.handleClick}
			>
				<button
					className={`btn btn-${this.props.theme}`}
					onClick={this.handleClick}
				>
					Select {this.props.theme} Theme
				</button>
			</span>
		)
	}
}
