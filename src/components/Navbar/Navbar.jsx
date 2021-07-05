import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";

import { logout } from "../../reducers/userSlice/userSlice";
import { showForm } from "../../reducers/displayFormSlice/displayFormSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handelLogout = (e) => {
    dispatch(logout());
    navigate("/");
  };

  const handleAddForm = () => {
    dispatch(showForm());
  };

  return (
    <NavbarWrapper>
      <ul>
        <li>
          <button onClick={handleAddForm}>Add</button>
        </li>
        <li>
          <button onClick={(e) => handelLogout(e)}>Logout</button>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;

    li {
      list-style: none;

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
export default Navbar;
