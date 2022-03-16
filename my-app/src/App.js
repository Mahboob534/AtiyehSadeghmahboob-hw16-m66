import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
import Formcpm from "./Formcpm";

/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */
function App() {
  console.log("App is rendering...");
  useEffect(() => {
    console.log("== App rendered ==");
  });

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  /**
   * create two states called value1 and value 2
   */

  const ref1 = useRef(0);
  const ref2 = useRef(0);
  /**
   * create ref for each input (ref1, ref2) and pass them to input elements
   */

  const changeValue1 = useCallback(() => {
    setValue1(ref1.current.value);
    /**
     * get value of input from ref and set first state
     */
  }, []);

  const changeValue2 = useCallback(() => {
    setValue2(ref2.current.value);
    /**
     * get value of input from ref and set second state
     */
  }, []);
  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{value1}</Title>
        <br />
        change first value:
        <input ref={ref1} />
        <Button onClick={changeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{value2}</Title>
        <br />
        change second value:
        <input ref={ref2} />
        <Button onClick={changeValue2}> change </Button>
      </div>
      <Formcpm />
    </div>
  );
}
export default App;
