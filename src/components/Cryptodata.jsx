import React, { useEffect, useState } from "react";
import cryfetch from "../Context/News/cryptoaction";

const Cryptodata = () => {
  const [crypto, setcrypto] = useState();

  const datafetch = async () => {
    const data = await cryfetch();
    
    setcrypto(data);
  };

  useEffect(() => {
    datafetch();
  }, []);
  return (
    <div className=" col-md-4  mx-3  p-2 border shadow-sm">
      <h3>
</h3>
      <h2>rate in USD={}$</h2>
      <h2>rate in INR=78678</h2>
    </div>
  );
};

export default Cryptodata;
