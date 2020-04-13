import React, {Component} from 'react'; 

export class ThemeButton extends Component {
	handleClick = (e, capturePhase=false) => {
		console.log(
			`ThemeButton: Type: ${e.type} ` +
			`Target: ${e.target.tagName} ` + 
			`CurrentTarget: ${e.currentTarget.tagName}`
		); 

		if (capturePhase) {
			console.log('Skipped function prop: capture phase'); 
		} else if (e.bubbles && e.currentTarget !== e.target) {
			console.log('Skipped function prop: bubble phase'); 
		} else {
			console.log('Invoked function prop'); 
			this.props.callback(this.props.theme); 
		}
	}

	render() {
		return (
			<span 
				className="m-1"
				onClick={this.handleClick}
				onClickCapture={(e) => this.handleClick(e, true)}
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
