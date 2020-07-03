import React from "react";
import { CovidStyle } from "./styles";

export const Deaths = ({
  deaths,
  confirmed,
  recovered,
  countryRegion,
  incidentRate,
}) => {
  return (
    <CovidStyle>
      <div className="grid_covid">
        <div className="grid_box uno">
          <div>
            <i className="fas fa-5x fa-skull-crossbones"></i>
          </div>
          <p className="number">{deaths}</p>
          <p className="letras">Fallecidos</p>
        </div>
        <div className="grid_box dos">
          <div>
            <i className="fas fa-5x fa-procedures"></i>
          </div>
          <p className="number">{confirmed}</p>
          <p className="letras">Confirmados</p>
        </div>
        <div className="grid_box tres">
          <div>
            <i className="fas fa-5x fa-briefcase-medical"></i>
          </div>
          <p className="number">{recovered}</p>
          <p className="letras">Recuperados</p>
        </div>
        <div className="grid_box cuatro">
          <div>
            <i className="fas fa-5x fa-ambulance"></i>
          </div>
          <p className="number">{`${Math.trunc(incidentRate)}%`}</p>
          <p className="letras">Tasa de incidentes</p>
        </div>
      </div>
    </CovidStyle>
  );
};
