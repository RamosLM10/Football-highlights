import React, {useState, useEffect} from 'react'
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

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
    <Container fluid>
      <Row>
        <Col>
          <div className='content'>
            {data.map((item) => (
              <div className='item-div' key={item.title} onClick= {()=> window.open(item.matchviewUrl)}>
                <div>
                  <h4 style={{fontSize: '12px'}}>{item.title}</h4>
                </div>
                <div>
                  <img src={item.thumbnail} alt="#" />  
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Content