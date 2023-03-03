/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-center p-2 text-lg text-slate-50">
      <h3 className="text-2xl">Bienvenu à l'assistant de Crous</h3>
      <Link to="/services">
        <button className="btn mt-20 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] duration-300 hover:shadow-none">
          Commencez
        </button>
      </Link>
    </div>
  );
};

export default Home;