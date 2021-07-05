import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import HomeDetails from "../HomeDetails/HomeDetails";
import Navbar from "../../Navbar/Navbar";
import AddForm from "../../Navbar/AddForm/AddForm";

const Home = () => {
  const [petData, setPetData] = useState([]);
  const showHideForm = useSelector((state) => state.formVisibility);
  const petToDos = useSelector((state) => state.toDos);

  useEffect(() => {
    setPetData(petToDos);
  }, [petToDos]);
  console.log(petData);

  return (
    <React.Fragment>
      <Navbar />
      <HomeWrapper>
        <div
          className={`${
            showHideForm.userForm === true && "displayForm"
          } add-container`}
        >
          <AddForm />
        </div>
        {petData.map((el) => {
          return (
            <div className="home" key={el.id}>
              <HomeDetails type={el.type} img={el.img} id={el.id} />
            </div>
          );
        })}
      </HomeWrapper>
    </React.Fragment>
  );
};

const HomeWrapper = styled.div`
position: relative;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .add-container {
    background-color: rgb(236, 236, 236);
    padding 3%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%); 
    z-index: 3;
    border-radius: 3px;
    opacity: 0;
    display: none;
  }

  .displayForm {
    opacity: 1;
    animation: fade-in 1.5s;
    display: block;
  }

  @keyframes fade-in{
    from{opacity: 0;}
    to{opacity: 1;}
  }

  .home {
    flex-basis: 25%;
  }
`;

export default Home;
