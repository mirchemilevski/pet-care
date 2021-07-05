import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../../../reducers/todoSlice/todoSlice";
import { showForm } from "../../../reducers/displayFormSlice/displayFormSlice";

import styled from "styled-components";

const AddForm = () => {
  const [inputValues, setInputValues] = useState({
    type: "",
    country: "",
    city: "",
    firstName: "",
    phone: "",
    img: "",
  });

  const dispatch = useDispatch();
  const [petToDos] = useSelector((state) => state.toDos);
  let lastId = petToDos.length;

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: lastId + 1,
        type: inputValues.type,
        img: inputValues.img,
        city: inputValues.city,
        country: inputValues.country,
        phone: inputValues.phone,
        personL: inputValues.firstName,
      })
    );
    dispatch(showForm());
  };

  return (
    <AddFormWrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter the animal type"
          value={inputValues.type}
          name="type"
          onChange={handleInputValue}
        />
        <input
          type="text"
          placeholder="Enter your country"
          value={inputValues.country}
          name="country"
          onChange={handleInputValue}
        />
        <input
          type="text"
          placeholder="Enter your city"
          value={inputValues.city}
          name="city"
          onChange={handleInputValue}
        />
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValues.firstName}
          name="firstName"
          onChange={handleInputValue}
        />
        <input
          type="number"
          placeholder="Enter your phone"
          value={inputValues.phone}
          name="phone"
          onChange={handleInputValue}
        />
        <input
          id="pet-img"
          type="file"
          value={inputValues.img}
          name="img"
          onChange={handleInputValue}
          hidden
        />
        <label htmlFor="pet-img">Attach a picture of your pet !</label>

        <button
          type="submit"
          disabled={
            !Object.values(inputValues).every((x) => x !== null && x !== "")
          }
        >
          Submit
        </button>
      </form>
    </AddFormWrapper>
  );
};

const AddFormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input,
    label {
      min-width: 380px;
      padding: 20px 0;
      padding-left: 15px;
      margin-bottom: 10px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.24);
      font-size: 15px;
      border-radius: 2px;
    }

    label {
      color: rgb(255, 255, 255);
      background-color: black;
      font-weight: 400;
      font-family: Arial;
      cursor: pointer;
    }

    button {
      padding: 17px 30px;
      margin-top: 10px;
      background: black;
      border: none;
      color: white;
      font-size: 14px;
      border-radius: 3px;
      cursor: pointer;
    }

    button:disabled {
      background-color: #ffcc3e;
      cursor: not-allowed;
    }
  }
`;

export default AddForm;
