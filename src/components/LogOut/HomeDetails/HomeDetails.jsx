import React from "react";
import { Link } from "@reach/router";

import styled from "styled-components";

const HomeDetails = ({ type, img, id }) => {
  return (
    <HomeDetailsWrapper>
      <div className="home-details">
        <div className="pet-type">{type}</div>
        <div className="img-wrapper">
          <img src={`/images/${img}.jpg`} alt="/" />
          <button>
            <Link to={`/home/${id}`}>Additional information </Link>
          </button>
        </div>
      </div>
    </HomeDetailsWrapper>
  );
};

const HomeDetailsWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  .home-details {
    padding-bottom: 4%;
    text-align: center;

    .pet-type {
      padding: 5px 0;
      text-transform: uppercase;
    }

    .img-wrapper {
      width: 100%;
      height: 100%;
      position: relative;

      img {
        width: 100%;
        display: block;
        border-radius: 5px;
      }

      button:hover,
      img:hover + button {
        display: block;
      }

      button {
        padding: 10px 15px;
        background: black;
        border: none;
        color: white;
        font-size: 14px;
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        display: none;

        a{
          text-decoration: none;
          color:white;
        }
      }
    }
  }
`;

export default HomeDetails;
