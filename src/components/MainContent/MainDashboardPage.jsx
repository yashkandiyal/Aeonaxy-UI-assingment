import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import { Avatar } from "@nextui-org/react";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import Modal from "./Modal";
const MainDashboardPage = () => {
  const [show, setShow] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };
  const showModal = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="h-full">
      <div className="flex justify-between px-7 items-center py-12 ">
        <div id="left" className="flex gap-5 items-center">
          <div className=" bg-[#ffd8a4] rounded-full flex items-center justify-center w-10 h-10 border-2 border-black">
            <h1 className="text-xl font-bold text-black">A</h1>
          </div>

          <h1 className=" text-medium md:text-2xl font-bold">Adam Cooper Team</h1>
        </div>
        <div id="right">
          <button
            className="bg-black text-white rounded-md py-2 px-2 md:px-4 text-sm font-semibold"
            onClick={showModal}>
            New Project
          </button>
        </div>
      </div>
      <ImageContainer showModal={showModal} />

      <div className=" fixed bottom-10 right-10 bg-black p-2 rounded-full">
        <ModeCommentIcon className="text-white" />
      </div>
      {/*Modal*/}
      <Modal
        show={show}
        setShow={setShow}
        toggleHandler={toggleHandler}
        isToggled={isToggled}
      />
    </div>
  );
};

export default MainDashboardPage;
