import React from "react";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ImageCard from "./ImageCard";
const ImageContainer = ({showModal}) => {
  return (
    <div className="bg-white mx-7 rounded-md">
      <div className=" flex items-center justify-between py-4 px-7">
        <div id="left" className="flex items-center gap-5">
          <FolderCopyOutlinedIcon fontSize="large" />
          <div>
            <h1 className=" text-lg">Default Project</h1>
            <p className=" text-xs text-[#a6a6a6]">1 storyboard</p>
          </div>
        </div>
        <div id="right" className="flex gap-5">
          <MoreVertOutlinedIcon className=" cursor-pointer" />
          <KeyboardArrowDownOutlinedIcon className=" cursor-pointer" />
        </div>
      </div>
      <div id="Images" className="flex gap-3 flex-wrap">
        <ImageCard />
        <div className=" flex flex-wrap justify-center items-center my-6 h-72 w-96 border-2 bg-[#fbfbfa] mx-7">
          <div class="flex items-center justify-center w-16 h-16  rounded-full" onClick={showModal} >
            <p class="text-4xl font-bold text-gray-500 cursor-pointer">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
