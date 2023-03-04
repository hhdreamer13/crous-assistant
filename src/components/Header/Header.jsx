import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <motion.div className="flex items-center justify-between p-3">
        <div className="flex">
          <button className="normal-case" onClick={() => navigate(-1)}>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.00002 15.3802H13.92C15.62 15.3802 17 14.0002 17 12.3002C17 10.6002 15.62 9.22021 13.92 9.22021H7.15002"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.57 10.7701L7 9.19012L8.57 7.62012"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Link to="/">
            <h2 className="mx-2 inline-block font-bold uppercase">
              Crous Assistant
            </h2>
          </Link>
        </div>
        <div className="hidden md:flex">
          <button className="btn-ghost btn mx-2">Bourse</button>
          <button className="btn-ghost btn mx-2">Logement</button>
          <button className="btn-ghost btn mx-2">Social</button>
          <button className="btn-ghost btn mx-2">CVEC</button>
          <button className="btn-ghost btn mx-2">Autre</button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
