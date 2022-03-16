import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
export default function Login() {
  return (
    <>
      <Form className="text-center text-white m-3 ">
      <h2>خوش آمدید</h2>
        <Form.Group className="pt-3 m-3 " >
          <Form.Control
            className=" bg-dark text-white"
            type="email"
            placeholder="*پست الکترونیکی"
            required
          />
        </Form.Group>
        <Form.Group className="m-3" >
          <Form.Control
            className=" bg-dark text-white"
            type="password"
            id="inputPassword6"
            aria-describedby="passwordHelpBlock1"
            placeholder="*کلمه عبور"
            required
          />
        </Form.Group>

        <Button className="f-1 px-5 mx-5 my-2" variant="success" type="submit">
          ورود
        </Button>
      </Form>
    </>
  );
}
