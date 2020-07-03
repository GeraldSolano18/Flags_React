import React, { useEffect, useState } from "react";
import { Deaths } from "./Deaths";
import Loader from 'react-loader-spinner';

export const CovidInfo = ({ params }) => {
  const [cargando, cargandoListo] = useState(false);
  const [covid, setCovid] = useState([]);
  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/confirmed")
      .then((response) => response.json())
      .then((covid) => covid.find((xd) => xd.iso2 === params.id))
      .then((data) => {
        setCovid(data);
        console.log('esta es la data del covid',data)
        cargandoListo(true);
      });
  }, []);

  return (
    <div>
      {!cargando?
           <div
             style={{
               width: "100%",
               height: "100",
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
             }}
           >
             <Loader type="ThreeDots" color="#00000" height="100" width="100" />
           </div>:
       <Deaths {...covid} 
       
       />}
    </div>
  );
};
