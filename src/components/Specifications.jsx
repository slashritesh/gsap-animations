import React from "react";

function Specifications(props) {
  const { text, highlight } = props;
  return (
    <div className="flex h-full gap-20 px-20">
      <div className="h-[80vh] sticky top-[9.5rem] flex items-end flex-1">
        <h2 className="text-5xl leading-normal mb-32">{text}</h2>
      </div>
      <div className=" flex-1">
        <div className="">
          {highlight.map((item) => {
            return (
              <div className=" flex gap-8 justify-end items-center h-[80vh]">
                
                  <img
                    className="h-[400px] w-[300px] object-cover"
                    src={item.imageurl}
                    alt={item.text}
                  />
                
                <h1 className="text-base w-32 mt-5 ">{item.text}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Specifications;
