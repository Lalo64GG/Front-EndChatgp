import React from "react";
import { HeaderText } from "../Atoms/HeaderText";
import { Paragrapg } from "../Atoms/Paragrapg";

export const TopBar = () => {
  return (
    <nav className=" bg-sky-800 h-[75px] flex items-center justify-between ">
      <div className="flex mx-[40px] mt-[18px]">
        <img
          className="h-[45px] w-[45px] object-cover rounded-[35px]"
          alt="profileImage"
        />
        <div className="flex flex-col px-2">
          <HeaderText customStyle={' text-white font-bold '} children={'ChatPdf'} />
          <Paragrapg customStyle={'text-gray-300 text-sm'} children={'online'}/>
        </div>
      </div>
    </nav>
  );
};
