import React, {useState, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import PositionCard from './components/PositionCard';
import { Jumbotron, Button, Row, Col, Fade, Container, } from 'reactstrap';
import Footer from './components/Footer';
import FormPage from './components/FormPage';
import PositionPaginator from './components/PositionPaginator';


function App()
{    
  const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);
    return (
      <div className="App">
        <div>
          <Jumbotron>
            <h1 className="display-4">NUCES Peshawar ACM Election 2020 Portal </h1>
            <p className="lead"> <i>I'm sending my prayers, good thoughts, and a little luck toward you just to let you know that I wish the best for you.</i> </p>
          
            <hr className="my-2" />
        
            <p className="lead">
              <Button color="primary" onClick={toggle}>Voting Guidelines</Button>
              <Fade in={fadeIn} tag="h5" className="mt-3">
                You have to Click on only one candidate tile, in order to cast the vote! Thanks
            </Fade>
            </p>
            {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
       
          </Jumbotron>
        </div>
        <Container>
        <Row>
          <Col xs={"6"}>
            <PositionCard />
          </Col>
          <Col xs={"6"}>
            <PositionCard />
          </Col>
          <Col xs={"6 "}>
            <PositionCard />
          </Col>
          <Col xs={"6 "}>
            <PositionCard />
          </Col>
        </Row>

        <Row>
        <Col sm="12" md={{ size: 8, offset: 4 }}>
          <PositionPaginator 
            activePage={1}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
          />
        </Col>
      </Row>
      </Container>
         
        <Footer />
      </div>
    );
  }


export default App;
