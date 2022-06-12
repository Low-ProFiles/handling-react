import React, { useState } from "react";

function UseInput() {
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
      const {
        target: { value }
      } = e;

      let willUpdate = true;
      if (typeof validator === "function") {
        //validator의 타입이 function이라면
        //willUpdate에 validator 값 적용
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };

  const maxLen = (value) => value.length <= 10;
  //validator를 maxLen으로 지정, 그 결과는 true or false
  const name = useInput("멋진 ", maxLen);

  return (
    <div> 
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default UseInput;
