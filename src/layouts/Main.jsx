import React from "react";
//assets
import waveImg from "../assets/wave-47c58563.svg"
//helper functions
import { fetchData } from "../helpers";
//rrd imports
import { Outlet, useLoaderData } from "react-router-dom";
//components
import Nav from "../components/Nav";
//loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
          <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={waveImg} alt="" />
    </div>
  );
};

export default Main;
