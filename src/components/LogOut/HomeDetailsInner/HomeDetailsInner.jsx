import React, { useState, useEffect } from "react";
import { useParams, navigate } from "@reach/router";
import styled from "styled-components";


import petCare from "../../../jsonData/petCare.json";

const HomeDetailsInner = () => {
  const [currentPet, setCurrentPet] = useState([]);
  const params = useParams();

  useEffect(() => {
    const filterPet = petCare.find(
      (el) => parseInt(el.id) === parseInt(params.id)
    );
    setCurrentPet(filterPet);
  }, [params.id]);

  console.log(currentPet);

  const handleReturn = (e) =>{
    console.log('return')
    navigate(`/home`);
  }

  return (
    <HomeDetailsInnerWrapper>
      <div className="container">
        <div className="image-container">
          <img src={`/images/${currentPet.img}.jpg`} alt="/" />
        </div>
        <div className="info-container">
          <h4>Animal type: {currentPet.type}</h4>
          <p>Country: {currentPet.country}</p>
          <p>City: {currentPet.city}</p>
          <p>Contact person: {currentPet.person}</p>
          <p>Contact phone: {currentPet.phone}</p>
        </div>
        <div className="btn-container">
          <button onClick={(e)=> handleReturn(e)}>Back</button>
        </div>
      </div>
    </HomeDetailsInnerWrapper>
  );
};

const HomeDetailsInnerWrapper = styled.div`
  position: relative;
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-container {
      img {
        width: 100%;
        display: block;
      }
    }

    .info-container {
      padding-left: 3%;
      h4 {
        text-align: center;
        padding-bottom: 15%;
      }
    }

    .btn-container {
      position: absolute;
      top: 3%;
      left: 2%;
      button {
        padding: 10px 25px;
        background: black;
        border: none;
        color: white;
        font-size: 14px;
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
`;

export default HomeDetailsInner;
