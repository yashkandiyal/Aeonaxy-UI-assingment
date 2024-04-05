import React from 'react'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const TopBanner = ({ showBanner, removeBanner }) => {
  return (
    <div>
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
    </div>
  );
};

export default TopBanner
