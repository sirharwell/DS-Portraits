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
const image4 = "https://d3c0aoh0dus5lw.cloudfront.net/WP/wp-content/uploads/2017/11/cjasonbradley_170902_26266-864x577.jpg";
const image5 = "https://boraboraphotos.com/wp-content/uploads/2014/07/edouard-ott-bora-bora-photographer.jpg"
const image6 = "http://www.dpreview.com/files/p/articles/0037136272/thingscutinhalf-05.jpeg"
const image7 = "https://i2.wp.com/www.thephotographyteam.co.uk/wp-content/uploads/2017/12/Fuji.jpg?resize=1200%2C800&ssl=1"
const image8 = "https://picscout.com/wp-content/uploads/2017/04/jakob-owens-91193-1024x842-1-1024x842.jpg"

const App = () => (
  <div style={styles}>
    <Parallax bgImage={image1}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>Professionals that you can trust</div>
      </div>
    </Parallax>
    <Parallax bgImage={image3}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>30 Years in the business</div>
      </div>
    </Parallax>
    <Parallax bgImage={image2}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>Very expensive equipment</div>
      </div>
    </Parallax>
    <Parallax bgImage={image4}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>Hipster Shmipster</div>
      </div>
    </Parallax>
    <Parallax bgImage={image5}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>Look at the Ocean</div>
      </div>
    </Parallax>
    <Parallax bgImage={image6}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>We know the camera inside and out</div>
      </div>
    </Parallax>
    <Parallax bgImage={image7}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>We got the gear</div>
      </div>
    </Parallax>
    <Parallax bgImage={image8}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>Look at all that stuff</div>
      </div>
    </Parallax>

  </div>
);

export default App;
