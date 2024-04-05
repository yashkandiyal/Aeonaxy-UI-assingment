import React from "react";
import { motion } from "framer-motion";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const SearchModal = ({ showModal, showIcon, setShowModal }) => {
  return (
    <div>
      {showModal && showIcon && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 bg-black bg-opacity-50  w-screen h-screen ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-lg h-screen w-full flex justify-center gap-5 items-center">
            <CloseOutlinedIcon onClick={() => setShowModal(false)} />
            <input
              type="text"
              className="w-64 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md"
              placeholder="Search..."
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SearchModal;
