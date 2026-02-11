import React from "react";

const Header = () => {
  return (
    <header className=" text-[#223614] bg-[#fbf6f1]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-[32.392px] font-medium">Lilac Template</h1>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className="hover:text-[#8c7c5f] text-[19.2784px] cursor-pointer">
              Blog
            </li>
            <li className="hover:text-[#8c7c5f] text-[19.2784px] cursor-pointer">
              Contact
            </li>
            <li className="hover:text-[#8c7c5f] text-[19.2784px] cursor-pointer">
              Profile
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
