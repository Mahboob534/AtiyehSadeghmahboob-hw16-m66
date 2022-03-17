import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./index.css";
export default function Login({
  passVisibility,
  Eye,
  handlePassVisibility}
) {
  const [validated, setValidated] = useState(false);
  const handleSubmitLog = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      alert("ورود با موفقیت انجام شد")

    }
    
    

    setValidated(true);
  };
  return (
    <>
      <Form
        className="text-center text-white m-3 "
        noValidate
        validated={validated}
        onSubmit={handleSubmitLog}
      >
        <h2>خوش آمدید</h2>
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
        <InputGroup className="my-3 position-relative">
          {passVisibility ? (
            <Form.Control
              className=" bg-dark text-white "
              
              type="password"
              id="inputPassword2"
              aria-describedby="passwordHelpBlock"
              placeholder="*کلمه عبور"
              required
            />
          ) : (
            <Form.Control
              className=" bg-dark text-white "
              
              type="text"
              id="inputPassword1"
              aria-describedby="passwordHelpBlock"
              placeholder="*کلمه عبور"
              required
            />
          )}

          {Eye == "eye" ? (
            <FaRegEye
              icon={["fa", "FaRegEye"]}
              onClick={handlePassVisibility}
            />
          ) : (
            <FaRegEyeSlash
              icon={["fa", "FaRegEye"]}
              onClick={handlePassVisibility}
            />
          )}

          <Form.Control.Feedback type="invalid">
            رمز عبور خود را وارد نمایید
          </Form.Control.Feedback>
        </InputGroup>

        <Button className="f-1 px-5 mx-5 my-2" variant="success" type="submit">
          ورود
        </Button>
      </Form>
    </>
  );
}
