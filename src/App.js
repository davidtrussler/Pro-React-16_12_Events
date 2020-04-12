import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      message: 'Ready', 
      counter: 0, 
      theme: 'secondary'
    }
  }

  handleEvent = (e, newTheme) => {
    e.persist(); 

    this.setState(
      {
        counter: this.state.counter + 1, 
        theme: newTheme
      }, 
      () => this.setState(
        {message: `${e.type}: ${this.state.counter}`}
      )
    ); 
  }

  toggleCheckBox = (e) => {
    if (this.state.counter === 0) {
      e.preventDefault(); 
    }
  }

  render() {
    return (
      <div className="m-2">
        <div className="form-check">
          <label>
            <input 
              className="form-check-input"
              type="checkbox"
              onClick={this.toggleCheckBox}
            />
            This is a checkbox
          </label>
        </div>

        <div className={`h4 bg-${this.state.theme} text-white text-center p-2`}>
          {this.state.message}
        </div>

        <div className="text-center">
          <button 
            className="btn btn-primary"
            onClick={(e) => this.handleEvent(e, 'primary')}
          >Normal</button>

          <button 
            className="btn btn-danger m-1"
            onClick={(e) => this.handleEvent(e, 'danger')}
          >Danger</button>
        </div>
      </div>
    );
  }
}
