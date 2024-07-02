import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 3}}
        className="flex justify-between mx-20 sticky top-0 py-10 z-40 bg-black"
      >
        <div className="absolute bg-black blur-xl top-10 -z-10 h-full w-full right-1"></div>
        <div className=" z-20">
          <h1 className="text-3xl backdrop-blur-lg capitalize">
            Explore the endless specifications <br /> of Sony bravia xR
          </h1>
        </div>
        <div className="flex z-20 gap-5 items-end">
          {["picture", "Sound", "Design", "Eco-friendly"].map((item,index) => {
            return (
              <h3 key={index} className="text-lg rounded-full px-5 py-2 border">{item}</h3>
            );
          })}
        </div>
      </motion.div>
  );
}
