import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Card from "../components/card";
import { getLessions } from "../features/lessions/lessionSlice";

const Home = () => {
  const { lessions } = useSelector((state) => state.lessions);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLessions());
  }, []);
  return (
    <>
      {/* {console.log(lessions)} */}
      {console.log(user)}
      {lessions.length > 0 ? (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4 m-2">
          {lessions.map((lession) => {
            return <Card key={lession.key} lession={lession} />;
          })}
        </div>
      ) : (
        <h1>data not available</h1>
      )}
    </>
  );
};

export default Home;
