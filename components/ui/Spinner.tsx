import React from "react";
import { Puff } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#7c3aed"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Spinner;
