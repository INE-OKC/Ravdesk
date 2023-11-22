import React from "react";

const Main = () => {
  return (
    <div>
      <div className="w-[90%] m-auto text-white p-5 flex justify-between items-start gap-10">
        <div className="w-[664px] h-[468px] bg-[#D7D2DB] rounded-xl"></div>
        <div className="w-[50%]">
          <p>Video of the Project</p>
          <span>Description</span>
          <p className="whitespace-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            quis facere soluta nulla, dolorem debitis cumque. Repudiandae
            praesentium voluptatum impedit reprehenderit asperiores minus sequi
            earum quia odio sint, ex id.
          </p>
        </div>
      </div>
      <div className="w-[954px] h-[85px] bg-[#246CFA] rounded-3xl p-5">
        <p className="text-xl text-white">Live Link of the Project</p>
      </div>
    </div>
  );
};

export default Main;
