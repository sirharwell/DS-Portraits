import React from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const image1 = "https://i.ytimg.com/vi/BEm8MzrdkJ0/maxresdefault.jpg";
const image2 = "https://images.unsplash.com/photo-1488724485310-bd445f3faff6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77b8b9f3ba22c745dce62101b47a3ae5&w=1000&q=80";
const image3 = "https://www.outdoorphotographer.com/images/stories/2015/apr/solutions/lead.jpg";

const App = () => (
  <div style={styles}>
    <Hello name="Parallax" />
    <Parallax bgImage={image1}
      strength={500}>
      <div style={{height: 500}}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image3} blur={{min: -1,max:3}}>
      <div style={{height: 500}}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax>
    <h1>| | |</h1>
    <Parallax bgImage={image2} strength={-100}>
      <div style={{height: 500}}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
    <div style={{height: 500}}>
      </div>
    <h2>{'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
