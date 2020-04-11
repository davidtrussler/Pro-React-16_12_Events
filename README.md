# Pro-React-16_12_Events

Based on Chapter 12 of Pro-React-16

See React documentation: [SyntheticEvent](https://reactjs.org/docs/events.html)

## Set up 

- Run `npm install` to install dependencies
- Run `npm start` to start the development server

### 1. [Preparation](https://github.com/davidtrussler/Pro-React-16_12_Events/tree/Preparation)

- Sets up a new app
- Adds bootstrap
- Creates new App component to display basic initial view

### 2. [Understanding Events](https://github.com/davidtrussler/Pro-React-16_12_Events/tree/Understanding-Events)

- Adds onClick event to button
- Invokes method to handle event
- Differentiates between different Event Types
- Uses persist method to avoid Event Reuse Pitfall
  - SyntheticEvents reset properties to null after event is handled
- Uses custom argument to invoke event handler
