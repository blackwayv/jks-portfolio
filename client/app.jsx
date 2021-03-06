import React from 'react';
import reactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    return (
      <div id='overview'>
        <div className='banner'>
          <div className='name'>Joshua K Smith</div>
          <div className='title'>Full-Stack Software Engineer</div>
          <div className='links'>
            <div className='bbutton' onClick={e => window.location='/osrs'}>OSRS Planner App</div>
            <div className='bbutton' onClick={e => window.location='/greenfield'}>Greenfield Retail Portal</div>
          </div>
        </div>
      </div>
    );
  };
}

reactDOM.render(<App />, document.getElementById('app'));