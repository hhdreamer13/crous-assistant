import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BourseRecours = () => {
  const recoursTypes = [
    {
      id: 1,
      name: "Recours - Bourses sur critères sociaux",
      link: "bourse/paiement/recours/bcs",
    },
    {
      id: 2,
      name: "Recours - Aides complémentaires",
      link: "bourse/paiement/recours/complémentaire",
    },
  ];
  return (
    <div className="">
      <div className="mx-auto mt-20 flex h-fit w-fit flex-col items-start p-2 text-lg text-slate-50">
        <p className="my-10 text-2xl">
          Selectionnez le service de votre demande :
        </p>
        <ul>
          {recoursTypes.map(({ id, name, link }) => {
            return (
              <motion.li
                key={id}
                className="my-3 py-2"
                whileHover={{ scale: 1.3, color: "#f87171", originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={`/${link}`}>
                  <button className="">{name}</button>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BourseRecours;