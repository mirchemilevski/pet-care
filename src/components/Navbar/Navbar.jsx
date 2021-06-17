import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/userSlice/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handelLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <ul>
        <li>
          <button onClick={(e) => handelLogout(e)}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
