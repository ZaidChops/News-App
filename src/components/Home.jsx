import React from "react";
import NewsList from "./NewsList";
import HeadLine from "./HeadLine";
import Weather from "./Weather";
import Cryptodata from "./Cryptodata";

const Home = () => {
  return (
    <>
      <h2 className="display-4 text-center">Trainding News</h2>
      <HeadLine />
      <div className="contaner-5 p-5 d-flex">
        <NewsList />
        <div>
          <Weather />
          <Cryptodata />
        </div>
      </div>
    </>
  );
};

export default Home;
