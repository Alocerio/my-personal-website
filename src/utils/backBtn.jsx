import { useNavigate } from 'react-router-dom';

import { motion } from "framer-motion";
const Backbtn = () => {

const navigate = useNavigate();
    return (
        <div className='top-6 absolute z-10'>
         <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          className='text-white  hover:text-black bg-black sm:px-10 px-3 py-0.8 text-sm xl:text-base rounded hover:bg-white border' onClick={() => navigate(-1)}>GO BACK
         </motion.button>
        </div>
    );
};
export default Backbtn;