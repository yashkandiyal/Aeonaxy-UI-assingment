import React from "react";

const ImageCard = () => {
  return (
    <div className="px-7">
      <div className=" border border-t-2 h-72 w-fit my-6">
        <img src="https://placehold.co/400x200" alt="" />
        <div className="pl-4 pt-6">
          <h1 className="font-semibold">AI Character Demo Storyboard</h1>
          <p className=" text-xs text-[#a6a6a6]">Updated at 19 Mar 24</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
