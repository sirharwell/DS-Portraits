import React from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';
import Hello from './Hello';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'


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
const image9 = "https://static.pexels.com/photos/368893/pexels-photo-368893.jpeg"

const App = () => (
  <div style={styles}>
    <Parallax bgImage={image1}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>Professionals that you can trust</div>
      </div>
    </Parallax>
    <Parallax bgImage={image2}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>30 Years in the business</div>
      </div>
    </Parallax>
    <Parallax bgImage={image3}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>Hipster Shmipster</div>
      </div>
    </Parallax>
    <Parallax bgImage={image4}
      strength={500}>
      <div style={{height: 700}}>
        <div style={insideStyles}>Very expensive equipment</div>
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
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header inverted as='h4' content='Contact Us' />
                <div link inverted>
                  <p>Phone: (801) 555-5555</p>
                  <p>Email: alan@dsportraits.com</p>
                  <p>Address: 300 East 370 South<br /> Salt Lake City, Utah 84111</p>
                  <div textAlign='center' relaxed columns={3}>
                      <Button circular color='facebook' icon='facebook' />
                      <Button circular color='twitter' icon='twitter' />
                      <Button circular color='linkedin' icon='linkedin' />
                      <Button circular color='google plus' icon='google plus' />
                    </div>
                </div>
              </Grid.Column>
              <Grid.Column width={10} verticalAlign="middle">
                <Header as='h4' inverted>About</Header>
                <p>We're photographers with a plan. I served 20 years in the military honing my skills and being the best I could possibly be.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
  </div>
);

export default App;
