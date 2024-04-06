import React from "react";
import { motion } from "framer-motion";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { SearchSharp } from "@mui/icons-material";

const SearchModal = ({ showModal, showIcon, setShowModal }) => {
  return (
    <div>
      {showModal && showIcon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 bg-black bg-opacity-50 w-screen h-screen ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-3 rounded-lg h-screen w-full flex flex-col items-center">
            <div className="self-start">
              <CloseOutlinedIcon onClick={() => setShowModal(false)} />
            </div>
            <div className="relative mt-4 flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-60 border border-gray-300 rounded-l-md py-2 px-4 outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-gray-200 hover:bg-gray-300 rounded-r-md px-4 py-2 transition duration-300 ease-in-out">
                <SearchSharp className="text-gray-600" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SearchModal;
