import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between h-16 items-center px-12 border-b-2 border-slate-300 font-semibold">
      <nav className="flex gap-4 text-sm">
        <p className="hover:cursor-pointer p-2">Clients</p>
        <p className="hover:cursor-pointer p-2">Orders</p>
        <p className="hover:cursor-pointer p-2">Messages</p>
        <p className="hover:cursor-pointer border-2 p-2 rounded-lg border-blue-200 bg-blue-100 text-blue-800">
          Users
        </p>
        <p className="hover:cursor-pointer p-2">Settings</p>
      </nav>
      <div className="hover:cursor-pointer">Sayed Ahmed</div>
    </header>
  );
};

export default Header;
