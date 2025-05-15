import { Link } from 'react-router-dom';
import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';

function Form (){
  let [value , setvalue] = useState({name :"", phone_number : 0 , age : 0 , is_employee :false, amount: ""})
  let [status , setstatus] = useState("")
  let disabled
  let variant
  if (value.name === "" || value.phone_number === "" || value.age === "" ||value.amount === "") {
    disabled = true
    variant = "outlined"
  }else {
    disabled = false
    variant = "contained"
  }
  
  function hendelSubmet () {
    let phon_numper = value.phone_number.toString();
    if (phon_numper.length < 7 || phon_numper.length > 10 || !/^[0-9]+$/.test(phon_numper)) {
      setstatus("ererr_Phone");
    } else if (value.age >= 110 || value.age <= 18) {
      setstatus("ererr_age")
    }else if (value.is_employee === false) {
      setstatus("ererr_employee")
    }else {
      setstatus("Success")
    }
  }
  return (
    <>
      <Massge status={status} setStatus={setstatus}/>
      <div className="form">
        <h1>Requesting a Loan</h1>
        <hr />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            hendelSubmet ();
          }}
        >
          <label>Name :</label>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setvalue({ ...value, name: e.target.value });
            }}
          />
          <label>Phone Number :</label>
          <input
            type="number"
            placeholder="Phone Number"
            onChange={(e) => {
              setvalue({ ...value, phone_number: e.target.value });
            }}
          />
          <label>Age :</label>
          <input
            type="number"
            placeholder="Age"
            onChange={(e) => {
              setvalue({ ...value, age: e.target.value });
            }}
          />
          <label>Are you an employee :</label>
          <input
            type="checkbox"
            placeholder="Are you an employee"
            onChange={(e) => {
              setvalue({ ...value, is_employee: e.target.checked });
            }}
          />
          <label>Loan Amount :</label>
          <select
            name="loan"
            id="loan"
            onChange={(e) => {
              setvalue({ ...value, amount: e.target.value });
            }}
          >
            <option value="">Select Amount</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
          </select>
          <Button type="submit" variant={variant} disabled={disabled}>Submit</Button>
        </form>
      </div>
    </>
  );
}

function Massge({ status , setStatus}) {
  if (status === "ererr_Phone") {
    return (
      <div className="Ererr" onClick={() => setStatus("")}>
        <div>
          <h1>Phone Number Format is Incorrect</h1>
        </div>
      </div>
    );
  } else if (status === "ererr_age") {
    return (
      <div className="Ererr" onClick={() => setStatus("")}>
        <div>
          <h1>Age is not allowed</h1>
        </div>
      </div>
    );
  } else if (status === "ererr_employee") {
    return (
      <div className="Ererr" onClick={() => setStatus("")}>
        <div>
          <h1>You need to be an employee first</h1>
        </div>
      </div>
    );
  } else if (status === "Success") {
    return (
      <div className="Success" onClick={() => setStatus("")}>
        <div>
          <h1>The Form Has Been Submitted Successfully</h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

function MainContent() {
  return (
      <div className="main-content">
      <Form/>
      </div>
  )
}

export default MainContent;