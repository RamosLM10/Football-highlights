import React, {useState, useEffect} from 'react'
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

const Content = () => {
  const[data, setData] = useState([]);
  
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.scorebat.com/video-api/v3/feed/?token=MTQxMjdfMTY0NjE0NDM1M19mYTNkNDcwOWI2MGIxNWY4ZjMxZmQ5ODQ2ODk1ZGFjMTEyMWQxMmNl`
    })
    .then(res => {
      console.log(res.data);
      setData(res.data.response);
    })
    .catch(err => 
      console.log(err))
  }, [])

  return (
  <div style={{ height: '88vh'}}>
    <Container fluid>
      <Row>
        <Col>
          <h1 style={{textAlign: 'center', fontSize: '60px'}}>Football Highlights</h1>
            {data.map((item) => {
              <div className='item-div'>
                <div className='name-div'></div>
                <div className='image-div'></div>
              </div>
            })}
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Content