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
          <div className='id'>
            <div className='name'>Joshua K Smith</div>
            <div className='title'>Full-Stack Software Engineer</div>
          </div>
          <div className='links'>
            <div className='bbutton res' onClick={e => window.open('https://docs.google.com/document/d/1lLXmaLU4-oZxpQoHOjwP-nNQXwC-_vCoBK3UaR-B1uk/edit?usp=sharing','_blank')}>Resume</div>
            <div className='bbutton lin' onClick={e => window.open('https://www.linkedin.com/in/joshuasmith117/','_blank')}>LinkedIn</div>
            <div className='bbutton git' onClick={e => window.open('https://github.com/blackwayv','_blank')}>GitHub</div>
            <div className='bbutton' onClick={e => window.location='/osrs'}>OSRS Planner App</div>
            <div className='bbutton gre' onClick={e => window.location='/greenfield'}>Greenfield Retail Portal</div>
          </div>
        </div>
        <div className='innerbody'>
          <div className='bio'>
            <div className='header'>Bio</div>
            <p>Hello, I'm Joshua K Smith, and I'm a Software Engineer. I recieved a Certificate of Software Engineering from Galvanize/Hack Reactor in January 2020.</p>
            <p>I attended University of Wyoming studying Computer Science for a couple of years, but ultimately decided that college wasn't for me. I currently work at Lowe's and code in my spare time; looking for a breakthrough into the industry.</p>
          </div>
          <div className='skills'>
            <div className='header'>Technical Skills</div>
            <p>Front-End - JavaScript (ES6), React.js, jQuery, CSS3, HTML5, Bootstrap<br />
            Back-End - Node.js, Express, MySQL, SQLite, MongoDB, Mongoose, PostgreSQL<br />
            Testing - Mocha, Chai, Jest<br />
            Tools - Git, npm, Webpack, Babel, Trello, Amazon Web Services (EC2), Loader.io, K6<br />
            Techniques - Agile Development, Pair Programming, Test Driven Development
            Other - C++ (Adept), Java (Beginner), Python (Beginner)</p>
          </div>
        </div>
      </div>
    );
  };
}

reactDOM.render(<App />, document.getElementById('app'));