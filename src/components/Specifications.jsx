import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Specifications(props) {
  const { text, highlight } = props;
  return (
    <div className="flex h-full gap-20 px-20">
      <div className="h-[80vh] sticky top-[9.5rem] flex items-end flex-1">
        <motion.h2
          initial={{ opacity: 0, x : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl leading-normal mb-32"
        >
          {text}
        </motion.h2>
      </div>
      <div className=" flex-1">
        <div className="">
          {highlight.map((item,index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className=" flex gap-8 justify-end items-center h-[80vh]"
              >
               <motion.div
                initial={{scale: 0.8}}
                whileInView={{ scale : 1}}
                transition={{ duration: 0.9 }}
                className="h-[450px] w-[300px]">
                <Image
                  className="h-full w-full object-cover"
                  src={item.imageurl}
                  alt={item.text}
                />
                </motion.div>

                <h1 className="text-base w-32 mt-5 ">{item.text}</h1>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Specifications;
