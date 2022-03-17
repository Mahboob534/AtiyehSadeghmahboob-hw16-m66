import React, { useState } from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Register({
  province,
  cityOfProvince,
  iconEye,
  passwordVisibility,
  handlePasswordVisibility,
}) {
  const [valueProv, setValueProv] = useState("");
  const [valueEducation, setValEducation] = useState("0");

  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    if (valueEducation !== '0') {

      event.stopPropagation();
      
    } 


    setValidated(true);
  };

  //  console.log(valueProv);
  // console.log(cityOfProvince[valueProv])

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="text-center text-white m-3">
        <h2>رایگان ثبت نام کنید</h2>
        <Col className=" m-2 ">
          <Form.Control
            className="my-3 bg-dark text-white"
            placeholder="نام*"
            name="firstName"
            required
          />
          <Form.Control.Feedback type="invalid">
            نام نمی تواند خالی باشد
          </Form.Control.Feedback>
        </Col>
        <Col className="m-2 ">
          <Form.Control
            className="my-3 bg-dark text-white"
            placeholder="نام خانوادگی*"
            name="lastName"
            required
          />
          <Form.Control.Feedback type="invalid">
            نام خانوادگی نمی تواند خالی باشد
          </Form.Control.Feedback>
        </Col>

        <Form.Group className="my-3 ">
          <Form.Control
            hasValidation
            className=" bg-dark text-white"
            type="email"
            name="email"
            placeholder="*پست الکترونیکی"
            required
          />
          <Form.Control.Feedback type="invalid">
            فرمت درست ایمیل 'username@ ... .com.
          </Form.Control.Feedback>
        </Form.Group>
        <InputGroup className="my-3 ">
          {passwordVisibility ? (
            <Form.Control
              className=" bg-dark text-white "
              name="password"
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="*کلمه عبور"
              onChangeText={(text) => setPassword(text)}
              required
            />
          ) : (
            <Form.Control
              className=" bg-dark text-white "
              name="password"
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="*کلمه عبور"
              onChangeText={(text) => setPassword(text)}
              required
            />
          )}

          {iconEye == "eye" ? (
            <FaRegEye
              icon={["fa", "FaRegEye"]}
              onClick={handlePasswordVisibility}
            />
          ) : (
            <FaRegEyeSlash
              icon={["fa", "FaRegEye"]}
              onClick={handlePasswordVisibility}
            />
          )}

          <Form.Control.Feedback type="invalid">
            لطفا از حروف و اعداد برای رمز استفاده کنید
          </Form.Control.Feedback>
        </InputGroup>
        <Form.Group className="my-3">
          <Form.Select
            name="eduction"
            className=" bg-dark text-white"
            aria-label="Default select example"
            onChange={(e) => setValEducation(e.target.value)}
          >
            <option value="0">تحصیلات </option>
            <option value="1">زیردیپلم</option>
            <option value="2">دیپلم</option>
            <option value="3">کاردانی</option>
            <option value="4">کارشناسی</option>
            <option value="5">کارشناسی ارشد</option>
            <option value="6">دکتری</option>
          </Form.Select>
        </Form.Group>

        {valueEducation !== "0" ? (
          <Form.Group className="my-3">
            <Form.Select
              className=" bg-dark text-white"
              name="educationPlace"
              required 
            >
              <option> محل تحصیل </option>
              {province.map((stateName) => (
                <option value={province.indexOf(stateName)}>{stateName}</option>
              ))}
            </Form.Select>
          </Form.Group>
        ) : (
          ""
        )}

        <Form.Group className="my-3">
          <Form.Select
            name="provinceOfBrith"
            className=" bg-dark text-white"
            onChange={(e) => setValueProv(e.target.value)}
            aria-label="Default select example"
            required
          >
            <option> استان تولد </option>
            {province.map((stateName) => (
              <option value={province.indexOf(stateName)}>{stateName} </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="my-3">
          <Form.Select
            name="brithPlace"
            className=" bg-dark text-white"
            aria-label="Default select example"
            required
          >
            <option>شهر تولد </option>
            {cityOfProvince[valueProv] !== undefined
              ? 
              cityOfProvince[valueProv].map((stateName) => (
                  <option value={stateName}>{stateName} </option>
                ))
              : ""}
          </Form.Select>
        </Form.Group>

        <Button className="px-5" variant="success" type="submit">
          ثبت نام
        </Button>
      </Row>
    </Form>
  );
}
