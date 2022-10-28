import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="h-96 flex justify-center items-center gap-2 flex-col">
      <h3 className="text-3xl">Check all the Users</h3>
      <Link
        to="/users"
        className=" mt-3 p-3 rounded-3xl bg-blue-900 text-white"
      >
        Show Users
      </Link>
    </div>
  );
};

export default Home;
