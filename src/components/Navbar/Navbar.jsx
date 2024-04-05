import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LoaderSvg from "./LoaderSvg";
import SearchModal from "./SearchModal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showIcon, setShowIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const removeBanner = () => {
    setShowBanner(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    width < 500 ? setShowIcon(true) : setShowIcon(false);
  }, [width]);

  return (
    <div>
      {/*Banner Section */}
      {showBanner && (
        <>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:pl-7 bg-yellow-200 py-3">
            <div className="flex items-center gap-2 bg-yellow-500 py-1 px-3 rounded-2xl text-sm font-medium">
              <AccessTimeIcon fontSize="small" />
              <h2>One-Time Offer</h2>
            </div>
            <div className="px-1 text-[0.94rem]">
              <h2 className="font-medium text-center sm:text-left sm:mt-0">
                Your AI Storyboarding Bundle Discount expires in{" "}
                <span className="bg-text-pink-400">5:01</span>
              </h2>
            </div>

            <div className="text-center sm:text-right">
              <button className="font-medium bg-[#F79AC0] py-[0.25rem] px-4 rounded-md">
                Claim Discount
              </button>
            </div>
            <CloseOutlinedIcon
              onClick={removeBanner}
              className="cursor-pointer"
            />
          </div>
        </>
      )}

      {/*This is the Navbar section */}
      <div className="flex justify-between items-center py-6 bg-white px-3 md:px-0">
        <div id="left-section" className="flex gap-6 items-center md:pl-4 mr-2">
          <div className="bg-black rounded-full flex items-center justify-center w-10 h-10  border-2 border-black">
            <h1 className="text-base md:text-[1.55rem] font-black text-white">
              B
            </h1>
          </div>
          <h1 className="lg:text-4xl text-xl font-semibold">
            Project Dashboard
          </h1>
        </div>

        <div id="right-section" className="flex items-center gap-4 md:gap-6">
          <div>
            {" "}
            {showIcon ? (
              <>
                <SearchIcon onClick={() => setShowModal((prev) => !prev)} />
              </>
            ) : (
              <>
                {" "}
                <input
                  type="text"
                  className=" w-36 md:w-80 px-4 py-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Search my Storyboards"
                />
              </>
            )}
          </div>
          <SearchModal
            showModal={showModal}
            showIcon={showIcon}
            setShowModal={setShowModal}
          />

          <div className="flex gap-6 items-center">
            <div className=" hidden lg:flex relative  items-center gap-2 border-2 px-2 py-1 border-blue-300 rounded-md bg-blue-100">
              <div className="relative flex items-center justify-center">
                {/* Loader element */}
                <LoaderSvg />

                <h3 className="text-sm z-10 absolute">4</h3>
              </div>

              <h2 className="text-base font-semibold z-10">Quick Start</h2>
            </div>

            <div className=" bg-[#ffd8a4] rounded-full flex items-center justify-center w-10 h-10 border-2 border-black">
              <h1 className="text-xl font-bold text-black">A</h1>
            </div>
            <div className="hidden lg:block  bg-black rounded-s-full py-1">
              <BoltOutlinedIcon fontSize="large" className="text-white pl-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
