import React from "react";
import { Link } from "@reach/router";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../../../reducers/todoSlice/todoSlice";

import styled from "styled-components";

const HomeDetails = ({ type, img, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteToDo({ id: id }));
    console.log(id);
  };

  return (
    <HomeDetailsWrapper>
      <div className="home-details">
        <div className="pet-type">{type}</div>
        <div className="img-wrapper">
          <img src={`/images/${img}.jpg`} alt="/" />
          <button>
            <Link to={`/home/${id}`}>Additional information </Link>
          </button>
          <div className="delete-btn-container">
            <div className="delete-button" onClick={handleDelete}>
              <div className="tooltip">Delete item</div>
            </div>
          </div>
        </div>
      </div>
    </HomeDetailsWrapper>
  );
};

const HomeDetailsWrapper = styled.div`
  width: 65%;
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

        a {
          text-decoration: none;
          color: white;
        }
      }

      .delete-btn-container {
        position: absolute;
        top: 2%;
        right: 3%;
        width: 10%;
        height 10%;

        .delete-button {
          position:relative;
          width: 100%;
          height 100%;
          cursor: pointer;
          margin: 0%;
          background-image: url("/images/deleteIcon.png");
          background-position: center;
          background-repeat: no-repeat; 
          background-size: cover; 

          .tooltip{
            position:absolute;
            top: 2%;
            right: -400%;
            display:none;
          }
        }

        .delete-button:hover + .tooltip{
          display:block;
        }
      }
    }
  }
`;

export default HomeDetails;
