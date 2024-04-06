import React, { useState, useEffect } from "react";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LoaderSvg from "./LoaderSvg";
import SearchModal from "./SearchModal";
import TopBanner from "./TopBanner";

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
    width < 768 ? setShowIcon(true) : setShowIcon(false);
  }, [width]);

  return (
    <div>
      {/*Banner Section */}
      <TopBanner removeBanner={removeBanner} showBanner={showBanner} />

      {/*This is the Navbar section */}
      <div className="flex justify-between items-center py-6 bg-white px-3 md:px-0">
        <div id="left-section" className="flex gap-6 items-center md:pl-4 mr-2">
          <div className="bg-black rounded-full flex items-center justify-center w-10 h-10  border-2 border-black">
            <h1 className="text-[1.4rem] md:text-[1.55rem] font-black text-white">
              B
            </h1>
          </div>
          <h1 className="md:text-4xl text-xl font-semibold">
            Project Dashboard
          </h1>
        </div>

        <div id="right-section" className="flex items-center gap-3 md:gap-6">
          <div>
            {" "}
            {/*When the window width is under 500px showIcon becomes true and search input is replaced with search icon */}
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
          {/*When search icon is clicked this modal will appear*/}
          <SearchModal
            showModal={showModal}
            showIcon={showIcon}
            setShowModal={setShowModal}
          />

          <div className="flex gap-6 items-center">
            <div className=" hidden lg:flex relative  items-center gap-2 border-2 px-2 py-1 border-blue-300 rounded-md bg-blue-100">
              <div className="relative flex items-center justify-center">
                {/* Loader Svg */}
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
