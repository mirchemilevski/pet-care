import React, { useState, useEffect } from "react";

import styled from "styled-components";

import HomeDetails from "../HomeDetails/HomeDetails";

import petCare from "../../../jsonData/petCare.json";

const Home = () => {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    setPetData(petCare);
  }, []);

  return (
    <HomeWrapper>
      {petData.map((el) => {
        return (
          <div className="home" key={el.id}>
            <HomeDetails type={el.type} img={el.img} id={el.id}/>
          </div>
        );
      })}
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  .home {
    flex-basis: 25%;
  }
`;

export default Home;
