import React, { useState, useEffect } from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Register from "./Register";


export default function () {

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [iconEye, setIconEye] = useState('eye');

  const [cityData, setcityData] = useState([]);

  


  useEffect(() => {
    fetch("./json/iranstates.json")
      .then((response) => response.json())
      .then((res) => {
        setcityData(res);
      });
  }, []);
  
  const handlePasswordVisibility = () => {
    if (iconEye === 'eye') {
      setIconEye('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (iconEye === 'eye-off') {
      setIconEye('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };
  
  //console.log(cityData);

  return (
    <div
      style={{
        background: "#212529",
        display: "block",
        width: 500,
        padding: "30",
        marginRight: "35%",
      }}
    >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12}>
            <Nav
              variant="pills"
              className=" bg-success bg-gradient f-1 mt-4 mx-5 
              flex-row justify-content-center align-item-center"
            >
              <Nav.Item className="w-50 text-center ">
                <Nav.Link eventKey="first">ورود</Nav.Link>
              </Nav.Item>
              <Nav.Item className="w-50 text-center">
                <Nav.Link eventKey="second">ثبت نام</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Login />
              </Tab.Pane>
              <Tab.Pane eventKey="second">

                <Register province={Object.keys(cityData)}
                cityOfProvince ={Object.values(cityData)}
                passwordVisibility={passwordVisibility}
                iconEye={iconEye}
                handlePasswordVisibility={handlePasswordVisibility}
                


                 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      
       
   
     
    </div>
  );
}
