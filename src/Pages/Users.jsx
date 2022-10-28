import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import UserDetails from "../Components/UserDetails";

const Users = () => {
  const [users, setUsers] = useState(null);
  const url = "https://demo2211087.mockable.io/mock";
  const header = {
    method: "POST",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
    },
  };

  useEffect(() => {
    fetch(url, header)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.companies);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between h-16 items-center px-14 ">
        <h1 className="text-4xl font-semibold">Users</h1>
        <div className="flex gap-2">
          <Link
            to="/"
            className="hover:cursor-pointer  py-2 px-3 rounded-3xl bg-blue-100 text-blue-900"
          >
            Go Home
          </Link>
          <button className="hover:cursor-pointer py-2 px-3 rounded-3xl bg-blue-900 text-white">
            Invite Users
          </button>
        </div>
      </div>
      <div className="mt-12">
        {users &&
          users.map((user) => <UserDetails key={user.name} user={user} />)}
      </div>
    </div>
  );
};

export default Users;
