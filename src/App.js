import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Parallax, Background } from 'react-parallax';


class App extends Component {
  render() {
    return (
      <div>
      <Parallax
        blur={10}
        bgImage={require('photos/Image.jpg')}
        bgImageAlt="the cat"
        strength={200}
      >
      World class service for a world class person.
        <div style={{ height: '200px' }} />
      </Parallax>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('photos/image2.jpg')}
        bgImageAlt="the dog"
        strength={200}
      >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
      </Parallax>
      <Parallax strength={300}>
        <div>Use the background component for custom elements</div>
        <Background className="custom-bg">
          <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
        </Background>
      </Parallax>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DS Portraits</h1>
        </header>
        <p className="App-intro">
          This will be the home page.
        </p>
      </div>
      </div>
    );
  }
}

export default App;
