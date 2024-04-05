import React from 'react'
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Modal = ({show,setShow,toggleHandler,isToggled}) => {
  return (
    <div>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ">
          <div className="bg-white px-6  pb-8 rounded-lg md:w-full max-w-md">
            <div className="flex justify-between  items-center">
              <h1 className="font-semibold text-2xl md:text-3xl my-8 ">New Storyboard</h1>
              <div
                className="p-1 bg-slate-100 rounded-full"
                onClick={() => setShow(false)}>
                <CloseOutlinedIcon className=" cursor-pointer" />
              </div>
            </div>

            {/* Storyboard Name input */}
            <label htmlFor="" className="mb-2">
              <p className="font-semibold">Storyboard Name</p>{" "}
              <input
                type="text"
                placeholder="e.g. Default Project Storyboard"
                className="w-full border border-gray-300 rounded mb-5 mt-1 px-3 py-3"
              />
            </label>
            <label htmlFor="">
              <p className="font-semibold">Frame Size</p>
              {/* Framer Size input */}
              <input
                type="text"
                placeholder="Landscape (16:9)"
                className="w-full border border-gray-300 rounded my-1 px-3 py-3"
              />
            </label>
            <div className="flex items-center justify-between gap-5 pt-5 bg-white">
              <div className="flex items-center gap-1 md:gap-2">
                <button
                  onClick={toggleHandler}
                  className={`relative w-8 h-4 rounded-full focus:outline-none border-black border-2 ${
                    isToggled ? "bg-black" : "bg-white"
                  }`}>
                  <span
                    className={`absolute left-[0.13rem] bottom-[0.11rem] inline-block w-2 h-2 rounded-full transform transition-transform duration-300 ease-in-out ${
                      isToggled ? "translate-x-full bg-white" : "bg-black"
                    }`}></span>
                </button>
                <span className="text-sm font-medium">AI Assistant</span>
              </div>

              <button className="bg-black px-2 md:px-4 py-2 rounded-md">
                {" "}
                <p className="font-semibold text-white text-sm">
                  Create Storyboard
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal
