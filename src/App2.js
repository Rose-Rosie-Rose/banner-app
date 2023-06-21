import React, { useState } from 'react';

const App = () => {
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);
  // const test = useState(0);
  // const color = useState(0);

  const [formValues, setFormValues] = useState({
    width: 0,
    height: 0,
    text: '',
    color: '',
  });
  console.log(formValues);

  const handleFormValues = (e) => {
    // setWidth(e.target.value);
    console.log(e.target.name);
    console.log(e.target.value);

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    // setWidth(0);
    // setHeight(0);
    // // ...reset
    setFormValues({
      width: 0,
      height: 0,
      text: '',
      color: '',
    });
  };

  return <div>
    <div style={{width: "100%", height: "40vh"}}>
      <input placeholder="넓이" name="width" value={formValues.width} onChange={handleFormValues} />
      <br />
      <input placeholder="높이" name="height" value={formValues.height} onChange={handleFormValues} />
      <br />
      <input placeholder="텍스트" name="text" value={formValues.text} onChange={handleFormValues} />
      <br />
      <input placeholder="색상" name="color" value={formValues.color} onChange={handleFormValues} />
      <br />      
      <button onClick={handleReset}>Reset</button>
      <div style={{backgroundColor:[formValues.color], height: `${formValues.height}px`, width: `${formValues.width}px`}}>{formValues.text}</div>
    </div>
  </div>
}

export default App;