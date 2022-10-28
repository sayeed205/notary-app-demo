import React from "react";

const UserDetails = ({ user }) => {
  return (
    <>
      <div className="mx-14 p-5 shadow-2xl rounded-xl my-4 border flex justify-between">
        <div className="">
          <input
            type="checkbox"
            name={user.name}
            id={user.name}
            className="mr-3"
          />
          <label htmlFor={user.name}>{user.name}</label>
        </div>
        <h4>{user.email}</h4>
        <div className="flex">
          <span class="flex h-3 w-3 pt-2 mr-2">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="">{user.status}</span>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
