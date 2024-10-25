import React from "react";
import logoMark from "../assets/logomark-01.svg";
import { Form, Link, NavLink } from "react-router-dom";
import { BiTrash } from "react-icons/bi";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to={"/"} aria-label="Go to Home">
        <img src={logoMark} alt="Logo" />
        <span>HomeBudget</span>
      </NavLink>

      {userName && (
              <Form method="post" action="/logout" onSubmit={(e) => {
                  // eslint-disable-next-line no-restricted-globals
                  if (!confirm("Delete user and all data?")) {
                      e.preventDefault()
                  }
        }}>
          <button type="submit" className="btn btnWarning">
                      <span>Delete User</span>
                      <BiTrash width={20}/>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
